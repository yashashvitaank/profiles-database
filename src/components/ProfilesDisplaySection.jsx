import { useEffect, useState } from "react";
import Button from "./Button";
import UserForm from "./ProfileForm/UserForm";
import ProfileTab from "./ProfileTab";

const DEFAULT_FORM_DATA = {
  name: "",
  email: "",
  mobile: "",
  profilePicture: "",
  address: "",
};

function ProfilesDisplaySection({ filterInput }) {
  const [editIndex, setEditIndex] = useState(-1);
  const [formType, setFormType] = useState("");
  const formTitle = formType === 'new' ? "Add a new profile" : "Edit profile details"
  const handleAddButton = () => {
    setFormType("new");
  };
  const [formData, setFormData] = useState(DEFAULT_FORM_DATA);
  const [allData, setAllData] = useState(() => {
    const savedData = localStorage.getItem("userForms");
    return savedData ? JSON.parse(savedData) : [];
  });

  const filteredData = allData.filter((data) => {
    // console.log("debug", data?.name?.startsWith(filterInput?.name),  data?.address?.includes(filterInput?.location))
    return (
      data?.name?.toLowerCase().startsWith(filterInput?.name.toLowerCase()) &&
      data?.address?.toLowerCase().includes(filterInput?.location.toLowerCase())
    );
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (uploadedImage) => {
    // setImage(uploadedImage);
    setFormData((prev) => ({
      ...prev,
      profilePicture: uploadedImage,
    }));
  };

  const handleDelete = (index) => {
    if (index >= 0 && index < allData?.length) {
      const updatedData = allData.filter((_, i) => i !== index); // Create a new array without the deleted item
      setAllData(updatedData);
      localStorage.setItem("userForms", JSON.stringify(updatedData)); // Update localStorage
    }
  };
  const handleEdit = (index, userData) => {
    if (userData && index >= 0) {
      console.log("debug", index, userData);
      setFormData({ ...userData });
      setFormType("edit");
      setEditIndex(index);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempArray = [...allData];
    if (editIndex >= 0) {
      tempArray[editIndex] = formData;
    } else {
      tempArray = [...tempArray, formData];
    }
    
    setAllData(tempArray);
    localStorage.setItem("userForms", JSON.stringify(tempArray));

    setFormData(DEFAULT_FORM_DATA);
    setFormType("");
    setEditIndex(-1)
  };


  return (
    <div className="flex flex-col w-screen lg:w-[60%] mx-auto">
      <Button
        buttonName={"+ Add new profile"}
        className="place-self-end mt-6 mr-3 py-4 md:py-3 rounded-full shadow-md shadow-emerald-300 "
        onClick={handleAddButton}
      />
      {formType && (
        <UserForm
          isOpen={formType}
          onClose={() => setFormType("")}
          formData={formData}
          handleChange={handleChange}
          handleImageUpload={handleImageUpload}
          handleSubmit={handleSubmit}
          title={formTitle}
          formType={formType}
        />
      )}
      <ProfileTab
        handleDelete={handleDelete}
        allData={filteredData}
        handleEdit={handleEdit}
        isFilterApplied={filterInput?.name || filterInput?.location}
      />
    </div>
  );
}

export default ProfilesDisplaySection;
