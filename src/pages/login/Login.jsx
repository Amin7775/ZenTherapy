import { useState } from "react";
import SignInImageSection from "../../components/loginAndRegisterComponents/Large/SignInImageSection";
import SignInForm from "../../components/loginAndRegisterComponents/Shared/SignInForm";
import smallBackgroundImage from "./../../assets/img/Background sm.jpeg";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <div>
      <Helmet>
        <title>ZenTherapy - Sign In</title>
      </Helmet>
      {/* Layout for large device */}
      <section className="hidden lg:block">
        {/* container */}
        <div className="min-h-screen flex items-center justify-center py-20">
          <section className="flex justify-center items-center gap-32 mx-auto  w-[83%] ">
            {/* form section */}
            <div className="flex-1">
              <SignInForm></SignInForm>
            </div>
            {/* image section */}
            <div className="w-[55%]">
              <SignInImageSection
                text1={"Sign in"}
                text2={"to view all the massage therapists"}
              ></SignInImageSection>
            </div>
          </section>
        </div>
      </section>

      {/* Layout for small device under 425px*/}
      <section className="block md:hidden">
        {/* container */}
        <section
          className="min-h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${smallBackgroundImage})` }}
        >
          {/* layout when btn is not clicked */}
          {!isButtonClicked && (
            <section>
              <section className="pt-32 text-center px-4">
                {/* heading contents */}
                <h1 className="text-4xl lg:text-[40px] font-medium text-primary-Color-blue-1">
                  ZenTherapy
                </h1>

                <h2 className="mt-7 text-2xl lg:text-3xl font-semibold">
                  Sign In To Your Account
                </h2>

                <p className="mt-5 text-gray-300 text-wrap">
                  welcome Back! By clicking the sign in button, you're agreeing
                  to ZenTherapy Terms and Service and acknowledge the{" "}
                  <span className="text-blue-400 underline cursor-pointer">
                    Privacy and Policy
                  </span>
                </p>
              </section>
              {/* btn to open form*/}
              <section
                className="flex justify-center mt-16 w-full"
                onClick={() => setIsButtonClicked(true)}
              >
                <div className=" flex flex-col items-center justify-center bg-neutral-800 opacity-80  w-[80%] px-6 py-7 rounded-lg hover:opacity-85 border-2 border-transparent hover:border-primary-Color-blue-1 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
                  <h3 className="text-white text-xl mt-1 text-center">
                    <span className="text-primary-Color-blue-2 font-semibold">
                      Sign in{" "}
                    </span>
                    to view all the massage therapists
                  </h3>
                </div>
              </section>
            </section>
          )}
          {/* layout when btn is clicked */}
          {isButtonClicked && (
            <section className="min-h-screen flex flex-col justify-between">
              {/* heading contents */}
              <section className="pt-28 text-center px-4">
                <h1 className="text-4xl lg:text-[40px] font-medium text-primary-Color-blue-1">
                  ZenTherapy
                </h1>

                <h3 className="text-white text-lg mt-6 max-w-[60%] mx-auto text-center">
                  <span className="font-semibold">Sign in </span>
                  to view all the massage therapists
                </h3>
              </section>
              {/* form */}
              <section className="bg-white pb-8 px-6 pt-10 mt-14 rounded-t-[38px]">
                <SignInForm></SignInForm>
              </section>
            </section>
          )}
        </section>
      </section>
    </div>
  );
};

export default Login;
