import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="py-4 pb-8 md:p-8">
      <Helmet>
        <title>ZenTherapy - About</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-custom-black mb-4 text-center">
        About ZenTherapy
      </h1>
    </div>
  );
};

export default About;
