import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypedPassword, setShowRetypedPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  // verify password
  const verifyPassword = (password, reTypedPassword) => {
    return password === reTypedPassword;
  };

  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = event.target;
    const userName = formData.name.value;
    const userEmail = formData.email.value;
    const password = formData.password.value;
    const retypedPassword = formData.confirmPassword.value;

    console.log(userName, userEmail, password, retypedPassword);
    let isConfirmed = verifyPassword(password, retypedPassword);
    console.log(isConfirmed);
    if (!isConfirmed) {
      setErrorMessage(true);
    } else {
      setErrorMessage(false);
    }
  };

  return (
    <div>
      {/* heading contents */}
      <h1 className="text-[40px] font-medium text-primary-Color-blue-1">
        ZenTherapy
      </h1>

      <h2 className="mt-3 text-3xl font-semibold">Sign Up Your Account</h2>

      <p className="mt-4 text-theme-text-color-2 text-wrap hidden md:block">
        welcome Back! By click the sign up button, you're agree to ZenTherapy
        Terms and Service and acknowledge the{" "}
        <span className="text-primary-Color-blue-1 underline cursor-pointer">
          Privacy and Policy
        </span>
      </p>

      {/* form content */}
      <section className="w-full overflow-x-hidden mt-8">
        <form onSubmit={handleSubmit}>
          {/* user name */}
          <div>
            <label className="font-medium" htmlFor="username">
              Name
            </label>
            <br />
            <input
              required
              className="w-full border-2 rounded-lg  py-3 px-3 text-theme-text-color-2 focus:border-theme-text-color-2 focus:outline-none mt-3"
              type="text"
              name="name"
              placeholder="Enter your user name"
            />
          </div>

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
          {/* Confirm Password */}
          <div className="mt-5">
            <label className="font-medium" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <br />
            <div className="relative">
              <input
                required
                className="w-full border-2 rounded-lg  py-3 px-3 text-theme-text-color-2 focus:border-theme-text-color-2 focus:outline-none mt-3"
                type={showRetypedPassword ? "text" : "password"} //for showing password as text
                name="confirmPassword"
                placeholder="Re-type your password"
              />
              {/* change icon based on state */}
              {showRetypedPassword ? (
                <FaRegEye
                  onClick={() => setShowRetypedPassword(!showRetypedPassword)}
                  className="absolute right-4 bottom-4 text-lg text-black opacity-50 cursor-pointer"
                ></FaRegEye>
              ) : (
                <FaRegEyeSlash
                  onClick={() => setShowRetypedPassword(!showRetypedPassword)}
                  className="absolute right-4 bottom-4 text-lg text-black opacity-50 cursor-pointer"
                ></FaRegEyeSlash>
              )}
            </div>
            {errorMessage && (
              <p className="text-red-500 mt-1">
                Invalid Password! Please retype the password
              </p>
            )}
          </div>
          {/* Terms of Service */}
          <div className="mt-5 flex items-center">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              id="terms"
            />
            <label className="text-sm" htmlFor="terms">
              Accept Terms of Service
            </label>
          </div>
          {/* Sign Up Button */}
          <div className="mt-5 flex justify-center">
            <button
              type="submit"
              className={`w-1/2 py-3 px-4 rounded-lg text-white font-semibold ${
                isChecked
                  ? "bg-primary-Color-blue-1 hover:bg-primary-Color-blue-2 transition-all duration-300 ease-in-out"
                  : "bg-primary-Color-blue-1 cursor-not-allowed"
              }`}
              disabled={!isChecked}
            >
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignUpForm;