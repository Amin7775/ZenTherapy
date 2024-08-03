import ImageSection from "../../components/loginAndRegisterComponents/Large/ImageSection";
import SignUpForm from "../../components/loginAndRegisterComponents/Shared/SignUpForm";

const Register = () => {
  return (
    <div>
      {/* Layout for large device */}
      <section className="hidden lg:block">
        {/* container */}
        <div className="min-h-screen flex items-center justify-center py-20">
          <section className="flex justify-center items-center gap-32 mx-auto  w-[83%] ">
            {/* form section */}
            <div className="flex-1">
              <SignUpForm></SignUpForm>
            </div>
            {/* image section */}
            <div className="w-[55%]">
              <ImageSection
                text1={"Create Account"}
                text2={"Fill in Your Information"}
              ></ImageSection>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Register;
