import React from "react";
import Image from "next/image";
import { PropertyType } from "./PropertyList";

interface PropertyProps {
  property: PropertyType;
}

const PropertyListItem: React.FC<PropertyProps> = ({ property }) => {
  return (
    <div className="cursor-pointer">
      <div className="overflow-hidden relative aspect-square rounded-xl">
        <Image
          fill
          sizes="(max-width:768px) 768px,(max-width:1200px):768px,768px)"
          alt="image"
          className="hover:scale-110 object-cover transition h-full w-full"
          src={property.image_url}
        />
      </div>
      <div className="mt-2">
        <p className="text-lg font-bold">{property.title}</p>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-500">
          <strong>${property.price_per_night}</strong> per night
        </p>
      </div>
    </div>
  );
};

export default PropertyListItem;
