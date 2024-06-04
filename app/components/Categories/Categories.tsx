import React from "react";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          alt="icon_category"
          height={30}
          width={30}
          src="/icon_category.jpg"
        />
        <span className="text-xs font-semibold">Amazing views</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          alt="icon_category"
          height={30}
          width={30}
          src="/icon_category.jpg"
        />
        <span className="text-xs font-semibold">Beach</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          alt="icon_category"
          height={30}
          width={30}
          src="/icon_category.jpg"
        />
        <span className="text-xs font-semibold">Villas</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          alt="icon_category"
          height={30}
          width={30}
          src="/icon_category.jpg"
        />
        <span className="text-xs font-semibold">Cabins</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          alt="icon_category"
          height={30}
          width={30}
          src="/icon_category.jpg"
        />
        <span className="text-xs font-semibold">Tiny homes</span>
      </div>
    </div>
  );
};

export default Categories;
