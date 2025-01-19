// import { useState } from "react";

const ImageUploader = ({setImage, required}) => {
//   const [image, setImage] = useState(() => localStorage.getItem('uploadedImage') || null);

  // Handle Image Upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const base64Image = reader.result;
        setImage(base64Image); // Set the image to display
        // localStorage.setItem('uploadedImage', base64Image); // Save to localStorage
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-3">
        <label  className="block text-sm font-medium text-emerald-500 text-left">
        Upload profile picture
      </label>
      <input
        type="file"
        required={required}
        accept="image/*"
        name="profilePicture"
        onChange={handleImageUpload}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
      />
{/* 
      {image && (
        <div>
          <p className="text-sm text-gray-500 mb-2">Uploaded Image:</p>
          <img src={image} alt="Uploaded" className="w-64 h-64 object-cover rounded-md shadow-md" />
        </div>
      )} */}
    </div>
  );
};

export default ImageUploader;
