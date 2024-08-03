import massageImage from "./../../../assets/img/MassageImage.jpeg";

const ImageSection = ({ text1, text2 }) => {
  return (
    <div className="border border-white rounded-2xl overflow-hidden relative">
      {/* image */}
      <img
        className="w-full h-[800px] blur-[14px] object-cover"
        src={massageImage}
        alt="Massage"
      />
      {/* text */}
      <div className="absolute flex flex-col items-center justify-center bg-neutral-800 opacity-80  w-[35%] top-[44%] left-[34%] px-8 py-6 rounded-lg hover:opacity-85 border-2 border-transparent hover:border-primary-Color-blue-1 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
        <h3 className="text-primary-Color-blue-2 text-2xl font-semibold text-center">
          {text1}
        </h3>
        <h3 className="text-white text-xl mt-1 text-center">{text2}</h3>
      </div>
    </div>
  );
};

export default ImageSection;
