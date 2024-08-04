// import React from "react";
import { FaCar } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

const TherapistCard = ({ data }) => {
  return (
    <section key={data.id} className="border rounded-lg  overflow-x-hidden">
      <div className="p-3">
        <img
          className="h-[250px] object-cover object-center w-full rounded-lg"
          src={data.image}
          alt=""
        />
        {/* text content */}
        <h3 className="mt-5 text-xl font-semibold">{data.name}</h3>
        <section className="flex gap-2 items-center text-theme-text-color-2 mt-2">
          <MdLocationPin></MdLocationPin>
          <p>{data.location}</p>
        </section>
        <section className="flex gap-2 items-center text-theme-text-color-2 mt-1">
          <FaCar></FaCar>
          <p>{data.services}</p>
        </section>
      </div>
      {/* details section */}
      <section className="mt-5 bg-sidebar-hover hover:bg-primary-Color-blue-2 transition-all duration-300 ease-in-out cursor-pointer">
        <p className="py-4 text-xl font-medium underline text-center hover:text-white">
          See Details
        </p>
      </section>
    </section>
  );
};

export default TherapistCard;
