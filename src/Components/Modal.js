import React from 'react';

const Modal = ({ selectedImage, setSelectedImage }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImage(null);
    }
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <img src={selectedImage} alt="enlarge pic" />
    </div>
  );
};

export default Modal;
