import MainImage from "./../../assets/img/search-image.svg";
import MainImageBG from "./../../assets/img/search-image-bg.svg";
import { useState } from "react";
import { useEffect } from "react";
import { MdLocationPin } from "react-icons/md";
import { FaCar } from "react-icons/fa";

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [therapistsData, setTherapists] = useState([]);
  const [filteredTherapists, setFilteredTherapists] = useState([]);

  useEffect(() => {
    fetch("/TherapistData.json")
      .then((res) => res.json())
      .then((data) => setTherapists(data));
  }, []);

  const handleSearch = () => {
    const filtered = therapistsData.filter(
      (therapist) =>
        therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        therapist.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTherapists(filtered);
    // open modal
    document.getElementById("my_modal_4").showModal();
  };

  //   console.log(filteredTherapists);
  return (
    <div className="bg-white p-4 md:p-8 flex flex-col md:flex-row rounded-xl gap-7 md:gap-20">
      {/* search section */}
      <section className="flex-1 md:w-full">
        {/* Text Contents */}
        <h1 className="text-xl md:text-2xl font-medium mt-1">
          I'm Looking for Massage Therapist Near...
        </h1>
        <p className="mt-3 md:mt-5 text-base md:text-lg md:max-w-[70%]">
          By using this site, I agree to be bound by the{" "}
          <span className="font-medium text-primary-Color-blue-2 underline">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="font-medium text-primary-Color-blue-2 underline">
            Privacy Policy
          </span>
        </p>
        {/* search section */}
        {/*  for large device */}
        <div className="mt-8 hidden md:block">
          <input
            type="text"
            placeholder="ZIP code or city name"
            className="border-2 rounded py-3.5 px-4 w-full max-w-md bg-theme-bg outline-none focus:border-theme-text-color-2/20"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="px-7 rounded-lg py-2.5 bg-primary-Color-blue-2 text-white font-semibold -ml-[84px]"
          >
            GO
          </button>
        </div>
      </section>
      {/* image */}
      <section
        className="w-full md:w-[45%] bg-cover bg-center flex justify-end items-center"
        style={{ backgroundImage: `url(${MainImageBG})` }}
      >
        <img className="md:mr-10 w-full md:w-[55%]" src={MainImage} alt="" />
      </section>
      {/* btn for small device */}
      <div className="mt-2 mb-2 block md:hidden">
        <input
          type="text"
          placeholder="ZIP code or city name"
          className="border-2 rounded py-3.5 px-4 w-full max-w-md bg-theme-bg outline-none focus:border-theme-text-color-2/20"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="px-7 rounded-lg py-2.5 bg-primary-Color-blue-2 text-white font-semibold -ml-[84px]"
        >
          GO
        </button>
      </div>
      {/* modal */}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-2xl md:text-3xl text-primary-Color-blue-1 text-center mt-2">
            Search Result : {filteredTherapists.length}
          </h3>
          {/* details */}
          {filteredTherapists.length > 0 ? (
            <section className="flex flex-wrap items-center justify-evenly mt-12">
              {filteredTherapists?.map((data, index) => (
                <section
                  key={index}
                  className="border rounded-lg mt-3 mb-10 overflow-x-hidden w-[280px] drop-shadow-sm"
                >
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
              ))}
            </section>
          ) : (
            <section className="h-full w-full flex items-center justify-center">
              <h1 className="text-red-500 font-medium text-xl mt-10 mb-4">
                No Therapists Found!
              </h1>
            </section>
          )}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="px-5 py-3 bg-primary-Color-blue-1 text-white font-medium rounded-xl hover:bg-primary-Color-blue-2 transition-all ease-in-out duration-300">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SearchSection;
