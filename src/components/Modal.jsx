import { X } from 'lucide-react';
import { useRef } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
//Making a reusable modal for the project
  const modalRef = useRef();

  // Closing modal when clicked outside
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return isOpen ? (
    <div
      className="fixed w-auto inset-0 px-2 md:px-4 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleOutsideClick}
    >
      <div
        ref={modalRef}
        className="bg-white p-4 md:p-6 rounded shadow-lg relative"
        onClick={(e) => e.stopPropagation()} // Preventing clicks inside the modal from closing it
      >
        <X className='absolute top-2 right-6 md:right-3 cursor-pointer' onClick={onClose} color='#3f3f46' />
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
