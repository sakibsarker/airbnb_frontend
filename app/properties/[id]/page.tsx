import React from "react";
import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import apiService from "@/app/components/services/apiService";
const PropertyDetailPage = async ({ params }: { params: { id: string } }) => {
  const property = await apiService.get(`/api/properties/${params.id}`);
  console.log("DATA: ", JSON.stringify(property));

  return (
    <main className="max-w=[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-5 overflow-hidden rounded-xl relative">
        <Image
          alt={property.data.title}
          fill
          src={property.data.image_url}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-3 py-6 pr-6">
          <h1 className="mb-4 text-4xl">{property.data.title}</h1>
          <span className="mb-6 block text-lg text-gray-600">
            {property.data.guests} guests - {property.data.bedrooms} bedrooms -{" "}
            {property.data.bathrooms} bathrooms
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-4">
            {property.data.landlord.avatar_url && (
              <Image
                alt="Profile"
                width={50}
                height={50}
                src={property.data.landlord.avatar_url}
                className="rounded-full object-cover"
              />
            )}
            <p>
              <strong>{property.data.landlord.name}</strong> is your host
            </p>
          </div>
          <hr />
          <p className="mt-6 text-lg">{property.data.description}</p>
        </div>
        <ReservationSidebar property={property} />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
