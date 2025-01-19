import { Edit, Trash } from "lucide-react";
import Button from "./Button";
import { useState } from "react";
import UserMap from "./UserMap";
import ProfileDetails from "./ProfileDetails";

function Profile({ data, index, handleDelete, handleEdit = () => {} }) {
  const { name, email, mobile, address, profilePicture } = data;
  const [mapView, setMapView] = useState(false);
  const [profileView, setProfileView] = useState(false);

  const preventPropagation = (event) => {
    event?.preventDefault();
    event?.stopPropagation();
  };
  const handleSummaryClick = (e) => {
    preventPropagation(e);
    setMapView(true);
  };

  const handleEditClick = (e) => {
    preventPropagation(e);
    handleEdit(index, data);
  };
  const handleDeleteClick = (e) => {
    preventPropagation(e);
    handleDelete(index);
  };
  return (
    <div
      className="flex justify-between items-center w-full pr-4 py-4 hover:bg-zinc-50  rounded"
      onClick={() => {
        setProfileView(true);
      }}
    >
      {profileView && (
        <ProfileDetails
          data={data}
          isOpen={profileView}
          onClose={() => {
            setProfileView(false);
          }}
        />
      )}
      <div className="flex items-start lg:items-center w-full gap-3">
        <img
          src={profilePicture}
          alt="profile picture"
          className="w-[60px] h-[60px] md:min-w-[7rem] md:h-[7rem] object-contain rounded-full border-[3px] border-zinc-100"
        />
        <div className="flex flex-col gap-3 w-full justify-between lg:flex-row">
          <span>
            <p className="text-zinc-800 md:text-xl capitalize">{name}</p>
            <p className="text-xs text-zinc-600 md:text-lg">{email}</p>
          </span>
          <span className="flex items-center gap-8">
            <Edit
              color="#34d399"
              className="cursor-pointer"
              onClick={handleEditClick}
            />
            <Trash
              color="#f87171"
              className="cursor-pointer"
              onClick={handleDeleteClick}
            />
          </span>
        </div>

        <Button
          buttonName={"Summary"}
          className="py-2 px-1 md:px-3 md:py-3 border-2 border-emerald-600"
          onClick={handleSummaryClick}
        />
        {mapView && (
          <UserMap
            map={address}
            isOpen={mapView}
            onClose={() => {
              setMapView(false);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Profile;
