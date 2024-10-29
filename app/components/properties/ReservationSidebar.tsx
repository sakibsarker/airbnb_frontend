"use client";

import React, { useState, useEffect } from "react";
import { Range } from "react-date-range";
import apiService from "../services/apiService";
import userLoginModal from "@/app/hooks/useLoginModal";
import { differenceInDays, eachDayOfInterval } from "date-fns";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

export type Property = {
  data: {
    id: string;
    guests: number;
    price_per_night: number;
  };
};

interface ReservationSidebarProps {
  userId: string | null;
  property: Property;
}

const ReservationSidebar: React.FC<ReservationSidebarProps> = ({
  property,
  userId,
}) => {
  const loginModal = userLoginModal();
  const [fee, setFee] = useState<number>(0);
  const [nights, setNights] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [minDate, setMinDate] = useState<Date>(new Date());
  const [guests, setGuests] = useState<string>("1");
  const guestsRange = Array.from(
    { length: property.data.guests },
    (_, index) => index + 1
  );
  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);
      if (dayCount && property.data.price_per_night) {
        const _fee = ((dayCount * property.data.price_per_night) / 100) * 5;
        setFee(_fee);
        setTotalPrice(dayCount * property.data.price_per_night + _fee);
        setNights(dayCount);
      } else {
        const _fee = (property.data.price_per_night / 100) * 5;
        setFee(_fee);
        setTotalPrice(property.data.price_per_night + _fee);
        setNights(1);
      }
    }
  }, [dateRange]);
  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
      <h2 className="mb-5 text-2xl">
        ${property.data.price_per_night} per night
      </h2>
      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label className="mb-2 block font-bold text-xs">Guests</label>

        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full -ml-2 text-sm"
        >
          {guestsRange.map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark transition rounded-xl">
        Book
      </div>
      <div className="mb-4 flex justify-between align-center">
        <p>
          ${property.data.price_per_night} * {nights} nights
        </p>
        <p>${property.data.price_per_night * nights}</p>
      </div>
      <div className="mb-4 flex justify-between align-center">
        <p>Booking Fee</p>
        <p>${fee.toFixed(2)}</p>
      </div>
      <hr />
      <div className="mt-4 flex justify-between align-center font-bold">
        <p>Total</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
    </aside>
  );
};

export default ReservationSidebar;
