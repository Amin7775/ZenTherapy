import { useContext, useState } from "react";
import { FaFacebookF, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import googleLogo from "./../../../assets/img/google logo.png";
import DividerWithText from "../../shared/dividerWithText/DividerWithText";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { signInUser, googleLogin } = useContext(AuthContext);
  //   const [errorMessage, setErrorMessage] = useState(false);

  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = event.target;
    const userEmail = formData.email.value;
    const password = formData.password.value;

    // console.log(userEmail, password);
    signInUser(userEmail, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // handle google login/register
  const handleGoogle = () => {
    googleLogin()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      {/* heading contents */}
      <h1 className="text-[40px] font-medium text-primary-Color-blue-1 text-start hidden md:block">
        ZenTherapy
      </h1>

      <h1 className="text-3xl  font-semibold  text-custom-black  text-center md:hidden">
        Sign In To Your Account
      </h1>

      <h2 className="mt-3 text-3xl font-semibold hidden md:block">
        Sign In To Your Account
      </h2>

      <p className="mt-4 text-theme-text-color-2 text-wrap text-center md:text-start">
        welcome Back! Select a method to log in.
      </p>

      {/* Other SignIn Methods - Google and Facebook */}
      {/* - Google is functional - TODO - Make facebook Functional Later*/}
      <section className="flex justify-center gap-8 md:gap-10 mt-7 md:mt-8">
        {/* google */}
        <div>
          <button
            onClick={() => handleGoogle()}
            className="flex items-center justify-center bg-gradient-to-r from-[#8f8f8f3b] to-white px-8 md:px-10 py-3 drop-shadow-md gap-3 rounded-lg border-2 hover:border-theme-text-color-2 transition-all duration-300 ease-in-out hover:border-2"
          >
            <img className="w-5" src={googleLogo} alt="" />
            Google
          </button>
        </div>
        {/* facebook */}
        <div>
          <button className="flex items-center justify-center bg-gradient-to-r from-[#298FFF] to-[#0778F5] px-7 md:px-10 py-3 drop-shadow-md gap-3 rounded-lg text-white border-2 border-[#298FFF] hover:border-theme-text-color-2 transition-all duration-300 ease-in-out hover:border-2">
            <FaFacebookF className=""></FaFacebookF>
            Facebook
          </button>
        </div>
      </section>

      {/* divider */}
      <DividerWithText text={"Or Continue with Email"}></DividerWithText>

      {/* form content */}
      <section className="w-full overflow-x-hidden -mt-5">
        <form onSubmit={handleSubmit}>
          {/* email */}
          <div className="mt-5">
            <label className="font-medium" htmlFor="email">
              Email
            </label>
            <br />
            <input
              required
              className="w-full border-2 rounded-lg  py-3 px-3 text-theme-text-color-2 focus:border-theme-text-color-2 focus:outline-none mt-3"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mt-5">
            <label className="font-medium" htmlFor="password">
              Password
            </label>
            <br />
            <div className="relative">
              <input
                required
                className="w-full border-2 rounded-lg  py-3 px-3 text-theme-text-color-2 focus:border-theme-text-color-2 focus:outline-none mt-3"
                type={showPassword ? "text" : "password"} //for showing password as text
                name="password"
                placeholder="Enter your password"
              />
              {/* change icon based on state */}
              {showPassword ? (
                <FaRegEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 bottom-4 text-lg text-black opacity-50 cursor-pointer"
                ></FaRegEye>
              ) : (
                <FaRegEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 bottom-4 text-lg text-black opacity-50 cursor-pointer"
                ></FaRegEyeSlash>
              )}
            </div>
          </div>

          {/* Remember me and forgot password */}
          <section className=" mt-4 flex justify-between items-center">
            {/* remember me  */}
            <div className=" flex items-center">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                id="terms"
              />
              <label className="text-sm" htmlFor="terms">
                Remember me
              </label>
            </div>
            {/* forgot password */}
            <p className="text-primary-Color-blue-1 underline text-sm font-medium">
              Forgot Password?
            </p>
          </section>
          {/* Sign Up Button */}
          <div className="mt-5 flex justify-center">
            <button
              type="submit"
              className={
                "w-1/2 py-3 px-4 rounded-lg text-white font-semibold bg-primary-Color-blue-1 hover:bg-primary-Color-blue-2 transition-all duration-300 ease-in-out"
              }
            >
              Sign in
            </button>
          </div>
          {/* redirect to register/signup page */}
          <p className="text-center mt-4">
            Don't Have an Account?
            <Link to={"/register"}>
              {" "}
              <span className="text-primary-Color-blue-2 underline font-medium">
                Create Account
              </span>
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
};

export default SignInForm;
