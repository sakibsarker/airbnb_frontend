"use client";
import React from "react";
import CustomButton from "../forms/CustomButton";

const ConversationDetails = () => {
  return (
    <>
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <div className="w-[80%] py-4 px-4 rounded-xl bg-gray-200">
          <p className="font-bold text-gray-500">Sakib Sarker</p>
          <p>Hi, i rent a hous</p>
        </div>
        <div className="w-[80%] ml-[20%] py-4 px-4 rounded-xl bg-blue-200">
          <p className="font-bold text-gray-500">Code John</p>
          <p>Ok give me a time</p>
        </div>
      </div>
      <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2 bg-gray-200 rounded-xl"
        />
        <CustomButton
          onClick={() => console.log("Clicked")}
          label="Send"
          className="w-[80px]"
        />
      </div>
    </>
  );
};

export default ConversationDetails;
