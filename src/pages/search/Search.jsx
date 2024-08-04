import { useEffect, useState } from "react";
import searchImage from "./../../assets/img/search-illu.svg";
import TherapistCard from "../../components/shared/TherapistCard/TherapistCard";
import { Helmet } from "react-helmet-async";

const Search = () => {
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
  return (
    <div className="py-4 pb-8 md:p-8 min-h-screen">
      <Helmet>
        <title>ZenTherapy - Search</title>
      </Helmet>
      <section className="flex flex-col items-center justify-center w-full  min-h-[68vh]">
        <img className="w-[80%] md:w-[23%] mb-10" src={searchImage} alt="" />
        {/* search bar */}
        <section className="flex justify-center w-[80%] md:w-1/3 mb-2">
          <div className="mt-2 mb-2 w-full">
            <input
              type="text"
              placeholder="Search therapists by name or location"
              className="border-2 border-theme-text-color-2/20 rounded py-3.5 px-4 w-full bg-white outline-none focus:border-theme-text-color-2/20"
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
        <p className="max-w-[80%] text-center text-wrap text-lg text-theme-text-color-2">
          Finding a massage therapist shouldn't be a pain in the neck!
        </p>
      </section>
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
                <TherapistCard key={index} data={data}></TherapistCard>
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

export default Search;
