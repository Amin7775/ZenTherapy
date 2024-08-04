import { Helmet } from "react-helmet-async";

const HelpCenter = () => {
  return (
    <div className="py-4 pb-8 md:p-8">
      <Helmet>
        <title>ZenTherapy - Help Center</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-custom-black mb-4 text-center">
        Help Center
      </h1>
    </div>
  );
};

export default HelpCenter;
