import { useEffect, useState } from "react";
import TherapistCard from "../../components/shared/TherapistCard/TherapistCard";
import { Helmet } from "react-helmet-async";

const NewListing = () => {
  const [therapistData, setTherapistData] = useState([]);

  useEffect(() => {
    fetch("/TherapistData.json")
      .then((res) => res.json())
      .then((data) => setTherapistData(data));
  }, []);

  return (
    <div className="py-4 pb-8 md:p-8">
      <Helmet>
        <title>ZenTherapy - New Listings</title>
      </Helmet>
      <h1 className="text-3xl font-semibold text-center">New Therapists</h1>
      <section className="rounded-xl p-4 md:p-8 bg-white mt-4 lg:mt-8">
        {/* cards container */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {therapistData?.map((data) => (
            <TherapistCard key={data.id} data={data}></TherapistCard>
          ))}
        </section>
      </section>
    </div>
  );
};

export default NewListing;
