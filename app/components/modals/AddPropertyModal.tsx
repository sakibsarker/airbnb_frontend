"use client";
import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import Modal from "./Modal";
import usenAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import CustomButton from "../forms/CustomButton";
import Categories from "../addproperty/Categories";
import SelectCountry, { SelectCountryType } from "../forms/SelectCountry";
import apiService from "../services/apiService";
import { useRouter } from "next/navigation";

const AddPropertyModal = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<string[]>([]);
  const [dataCategory, setDataCategory] = useState("");
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [dataPrice, setDataPrice] = useState("");
  const [dataBedrooms, setDataBedrooms] = useState("");
  const [dataBatrooms, setDataBatrooms] = useState("");
  const [dataGuests, setDataGuests] = useState("");
  const [dataCountry, setDataCountry] = useState<SelectCountryType>();
  const [dataImage, setDataImage] = useState<File | null>(null);
  const router = useRouter();

  const addPropertyModal = usenAddPropertyModal();

  const setCategory = (category: string) => {
    setDataCategory(category);
  };

  const setImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const tempImage = event.target.files[0];
      setDataImage(tempImage);
    }
  };

  const submitForm = async () => {
    console.log("submitform");
    if (dataTitle && dataDescription && dataPrice && dataCountry && dataImage) {
      const formData = new FormData();
      formData.append("category", dataCategory);
      formData.append("title", dataTitle);
      formData.append("description", dataDescription);
      formData.append("price_per_night", dataPrice);
      formData.append("bedrooms", dataBedrooms);
      formData.append("bathrooms", dataBatrooms);
      formData.append("guests", dataGuests);
      formData.append("country", dataCountry.label);
      formData.append("country_code", dataCountry.value);
      formData.append("image", dataImage);
      const response = await apiService.post(
        "/api/properties/create/",
        formData
      );

      if (response.success) {
        console.log("SUCCESS:", response);
        router.push("/");
        addPropertyModal.close();
      } else {
        console.log("error");
        const tmpErrors: string[] = Object.values(response).map(
          (error: any) => {
            return error;
          }
        );
        setErrors(tmpErrors);
      }
    }
  };
  const content = (
    <>
      {currentStep == 1 ? (
        <>
          <h1 className="mb-6 text-2xl">Choose category</h1>
          <Categories
            dataCategory={dataCategory}
            setCategory={(category) => setCategory(category)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(2)} />
        </>
      ) : currentStep == 2 ? (
        <>
          <h1 className="mb-6 text-2xl">Describe your place</h1>
          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>Title</label>
              <input
                type="text"
                value={dataTitle}
                onChange={(e) => setDataTitle(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
              <label>Description</label>
              <textarea
                value={dataDescription}
                onChange={(e) => setDataDescription(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
          </div>
          <CustomButton
            label="Previous"
            className="mb-2 bg-black/90 hover:bg-gray-800"
            onClick={() => setCurrentStep(1)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(3)} />
        </>
      ) : currentStep == 3 ? (
        <>
          <h1 className="mb-6 text-2xl">Details</h1>
          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>Price per nigt</label>
              <input
                type="number"
                value={dataPrice}
                onChange={(e) => setDataPrice(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
              <label>Bedrooms</label>
              <input
                type="number"
                value={dataBedrooms}
                onChange={(e) => setDataBedrooms(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
              <label>Batrooms</label>
              <input
                type="number"
                value={dataBatrooms}
                onChange={(e) => setDataBatrooms(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
              <label>Maximum number of guests</label>
              <input
                type="number"
                value={dataGuests}
                onChange={(e) => setDataGuests(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
          </div>
          <CustomButton
            label="Previous"
            className="mb-2 bg-black/90 hover:bg-gray-800"
            onClick={() => setCurrentStep(2)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(4)} />
        </>
      ) : currentStep == 4 ? (
        <>
          <h1 className="mb-6 text-2xl">Location</h1>
          <div className="pt-3 pb-6 space-y-4">
            <SelectCountry
              value={dataCountry}
              onChange={(value) => setDataCountry(value as SelectCountryType)}
            />
          </div>
          <CustomButton
            label="Previous"
            className="mb-2 bg-black/90 hover:bg-gray-800"
            onClick={() => setCurrentStep(3)}
          />
          <CustomButton label="Next" onClick={() => setCurrentStep(5)} />
        </>
      ) : (
        <>
          <h1 className="mb-6 text-2xl">Image</h1>
          <div className="pt-3 pb-6 space-y-4">
            <div className="py-4 px-6 bg-gray-600 text-white rounded-xl">
              <input type="file" accept="image/*" onChange={setImage} />
              {dataImage && (
                <div className="w-[200px] h-[150px] relative">
                  <Image
                    fill
                    alt="Uploaded Image"
                    src={URL.createObjectURL(dataImage)}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              )}
            </div>
          </div>
          {errors.map((error, index) => {
            return (
              <div
                key={index}
                className="p-5 mb-4 bg-airbnb text-white rounded-none opacity-80"
              >
                {error}
              </div>
            );
          })}
          <CustomButton
            label="Previous"
            className="mb-2 bg-black/90 hover:bg-gray-800"
            onClick={() => setCurrentStep(4)}
          />
          <CustomButton label="Submit" onClick={submitForm} />
        </>
      )}
    </>
  );
  return (
    <>
      <Modal
        isOpen={addPropertyModal.isOpen}
        close={addPropertyModal.close}
        lable="Add property"
        content={content}
      />
    </>
  );
};

export default AddPropertyModal;
