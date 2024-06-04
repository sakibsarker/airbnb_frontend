import React from "react";

const SearchFilter = () => {
  return (
    <div className="h-[30px] lg:h-[45px] flex flex-row items-center justify-between border rounded-full">
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between">
          <div className="cursor-pointer w-[250px] h-[44px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <div className="text-xs font-semibold">Where</div>
            <div className="text-sm">Wanted location</div>
          </div>
          <div className="cursor-pointer h-[45px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <div className="text-xs font-semibold">Check in</div>
            <div className="text-sm">Add dates</div>
          </div>
          <div className="cursor-pointer h-[45px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <div className="text-xs font-semibold">Check out</div>
            <div className="text-sm">Add dates</div>
          </div>
          <div className="cursor-pointer h-[45px] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100">
            <div className="text-xs font-semibold">Who?</div>
            <div className="text-sm">Add guests</div>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="cursor-pointer p-2 lg:p-3 bg-airbnb hover:bg-airbnb-dark transition rounded-full text-white">
          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "16px",
              width: "16px",
              stroke: "currentColor",
              strokeWidth: "4",
              overflow: "visible",
            }}
          >
            <path
              fill="none"
              d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
