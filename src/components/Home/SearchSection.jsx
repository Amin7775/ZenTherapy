import MainImage from "./../../assets/img/search-image.svg";
import MainImageBG from "./../../assets/img/search-image-bg.svg";
import { useState } from "react";
import { useEffect } from "react";

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
    </div>
  );
};

export default SearchSection;
