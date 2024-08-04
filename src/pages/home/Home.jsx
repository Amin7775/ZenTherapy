import FeaturedTherapists from "../../components/Home/FeaturedTherapists";
import SearchSection from "../../components/Home/SearchSection";

const Home = () => {
    return (
        <div className="py-4 md:p-8">
            <SearchSection></SearchSection>

            <h1 className="mt-5 md:mt-10 text-xl px-4 md:px-0 md:text-2xl font-medium mb-4 md:mb-3">Featured Therapists</h1>
            <div className="max-w-[100%]">
            <FeaturedTherapists></FeaturedTherapists>
            </div>
        </div>
    );
};

export default Home;