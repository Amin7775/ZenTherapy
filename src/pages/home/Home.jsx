import FeaturedTherapists from "../../components/Home/FeaturedTherapists";
import SearchSection from "../../components/Home/SearchSection";
import Testimonials from "../../components/Home/Testimonials";

const Home = () => {
  return (
    <div className="py-4 md:p-8">
      {/* search section */}
      <SearchSection></SearchSection>
      {/* featured therapists section */}
      <h1 className="mt-5 md:mt-10 text-xl px-4 md:px-0 md:text-2xl font-medium mb-4 md:mb-3">
        Featured Therapists
      </h1>
      <div className="max-w-[100%] overflow-x-hidden">
        {/* TODO: Apply navigate system on slider later */}
        <FeaturedTherapists></FeaturedTherapists>
      </div>
      {/* testimonial and cities section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* testimonials */}
        <section>
          <h1 className="mt-5 md:mt-10 text-xl px-4 md:px-0 md:text-2xl font-medium mb-4 md:mb-3">
            Featured Testimonials
          </h1>
          <Testimonials></Testimonials>
        </section>
        {/* cities */}
        <section>
          <h1 className="mt-5 md:mt-10 text-xl px-4 md:px-0 md:text-2xl font-medium mb-4 md:mb-3">
            Popular Cities
          </h1>
        </section>
      </section>
    </div>
  );
};

export default Home;
