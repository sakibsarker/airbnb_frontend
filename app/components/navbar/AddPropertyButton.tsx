"use client";
import React from "react";
import usenAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import userLoginModal from "@/app/hooks/useLoginModal";

interface AddPropertyButtonProps {
  userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({ userId }) => {
  const loginModal = userLoginModal();
  const AddPropertyModal = usenAddPropertyModal();

  const airbnbYourHome = () => {
    if (userId) {
      AddPropertyModal.open();
    } else {
      loginModal.open();
    }
  };
  return (
    <div
      onClick={airbnbYourHome}
      className="p-2 cursor-auto text-sm font-semibold rounded-full hover:bg-gray-100"
    >
      DjangoBnb your home
    </div>
  );
};

export default AddPropertyButton;
