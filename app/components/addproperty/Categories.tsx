import React from "react";
import Image from "next/image";

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setCategory,
}) => {
  return (
    <>
      <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
        <div
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory === "Amazing views"
              ? "border-gray-800"
              : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
          onClick={() => setCategory("Amazing views")}
        >
          <Image
            alt="icon_category"
            height={30}
            width={30}
            src="/icon_category.jpg"
          />
          <span className="text-xs font-semibold">Amazing views</span>
        </div>
        <div
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory === "Beach" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
          onClick={() => setCategory("Beach")}
        >
          <Image
            alt="icon_category"
            height={30}
            width={30}
            src="/icon_category.jpg"
          />
          <span className="text-xs font-semibold">Beach</span>
        </div>
        <div
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory === "Villas" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
          onClick={() => setCategory("Villas")}
        >
          <Image
            alt="icon_category"
            height={30}
            width={30}
            src="/icon_category.jpg"
          />
          <span className="text-xs font-semibold">Villas</span>
        </div>
        <div
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory === "Cabins" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
          onClick={() => setCategory("Cabins")}
        >
          <Image
            alt="icon_category"
            height={30}
            width={30}
            src="/icon_category.jpg"
          />
          <span className="text-xs font-semibold">Cabins</span>
        </div>
        <div
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory === "Tiny homes" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
          onClick={() => setCategory("Tiny homes")}
        >
          <Image
            alt="icon_category"
            height={30}
            width={30}
            src="/icon_category.jpg"
          />
          <span className="text-xs font-semibold">Tiny homes</span>
        </div>
      </div>
    </>
  );
};

export default Categories;
