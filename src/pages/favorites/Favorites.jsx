import { Helmet } from "react-helmet-async";

const Favorites = () => {
  return (
    <div className="py-4 pb-8 md:p-8">
        <Helmet>
        <title>ZenTherapy - Favorites</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-custom-black mb-4 text-center">
        Favorites
      </h1>
    </div>
  );
};

export default Favorites;
