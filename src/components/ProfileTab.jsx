import { Children } from "react";
import Profile from "./Profile";

function ProfileTab({ handleDelete, allData, handleEdit = () => {}, isFilterApplied = false }) {

  const emptyText = isFilterApplied ? "No match found!" : "No records added yet. Add a new profile"
  return allData?.length > 0 ? (
    <div className="mt-7 bg-white shadow-md rounded-lg p-4 max-h-[40rem] overflow-y-auto">
      {allData?.length
        ? Children.toArray(
            allData?.map((profileDataItem, index) => (
              <Profile
                data={profileDataItem}
                index={index}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ))
          )
        : null}
    </div>
  ) : (
    <div className="h-[20rem] grid place-items-center text-emerald-600 text-lg">{emptyText}</div>
  );
}

export default ProfileTab;
