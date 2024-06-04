import React from "react";
import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
const PropertyDetailPage = () => {
  return (
    <main className="max-w=[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-5 overflow-hidden rounded-xl relative">
        <Image
          alt="Beach House"
          fill
          src="/image/house.jpg"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-3 py-6 pr-6">
          <h1 className="mb-4 text-4xl">Property name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            4 guests - 2 bedrooms - 1
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-4">
            <Image
              alt="Profile"
              width={50}
              height={50}
              src="/image/house.jpg"
              className="rounded-full object-cover"
            />
            <p>
              <strong>Sakib Sarker</strong> is your host
            </p>
          </div>
          <hr />
          <p className="mt-6 text-lg">
            Loren ldjflajfkjdlk flajdfl aj jfdlajf ajsdfl aldfjls
          </p>
        </div>
        <ReservationSidebar />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
