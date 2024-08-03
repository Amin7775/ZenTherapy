// import ImageSection from "../../components/loginAndRegisterComponents/Large/ImageSection";

import SignInImageSection from "../../components/loginAndRegisterComponents/Large/SignInImageSection";
import SignInForm from "../../components/loginAndRegisterComponents/Shared/SignInForm";
import SignUpForm from "../../components/loginAndRegisterComponents/Shared/SignUpForm";

const Login = () => {
  return (
    <div>
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
    </div>
  );
};

export default Login;
