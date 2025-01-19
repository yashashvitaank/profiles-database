import { useState } from "react";
import Modal from "../Modal";
import InputField from "./InputField";
import ImageUploader from "../ImageUploader/ImageUploader";

const UserForm = ({ isOpen, onClose, formData, handleChange, handleSubmit, handleImageUpload, title, formType }) => {
 const isImageRequired = formType === "edit" ? false : true;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-screen md:w-[40rem] bg-white p-2">
        <p className="text-xl font-semibold mb-4 text-emerald-600 border-b-2 border-emerald-500">{title}</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 md:items-center">
            <InputField label='Mobile number (starting from 6-9 /10 digits)' name='mobile' pattern="[6-9][0-9]{9}"
          title="please enter a valid number" value={formData.mobile} onChange={handleChange} placeholder={'0000000000'}/>
            <ImageUploader setImage={handleImageUpload} required={isImageRequired} />
          </div>
          <InputField
            label="Address"
            type="textarea"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter a description"
          />
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 rounded-md hover:bg-emerald-600 focus:ring focus:ring-emerald-300"
          >
            Save
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default UserForm;
