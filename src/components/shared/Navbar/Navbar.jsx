// import { FaAngleDown } from "react-icons/fa";
import userImage from "./../../../assets/img/user image.png";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { CiBellOn, CiLogout } from "react-icons/ci";
// import { RxExit } from "react-icons/rx";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { BsInfoSquare } from "react-icons/bs";
import { CiGrid41, CiSearch } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { ImFileText2 } from "react-icons/im";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getActiveClass = (path) => {
    return location.pathname === path
      ? "font-medium bg-sidebar-hover border-l-sidebar-hover-border"
      : "text-[#5C635A] border-white";
  };

  // function to toggle nav for small devices
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-20 bg-white">
      <section className=" h-full px-8">
        {/* container */}
        <section className="flex justify-between items-center h-full">
          {/* user info */}
          {/*for large device only */}
          <section className="hidden">
            <section className="flex items-center gap-2">
              <img
                className="rounded-full w-10"
                src={userImage}
                alt="user Image"
              />
              {/* text info */}
              <div>
                {/* user name */}
                <div className="flex justify-between">
                  <h3 className="font-medium text-sm text-custom-black">
                    Sagar Sani
                  </h3>
                  <IoIosArrowDown className="cursor-pointer" />
                </div>

                {/* email */}
                <h4 className="text-sm text-[#5C635A]">SagarSani@gmail.com</h4>
              </div>
            </section>
          </section>
          {/* Org name/logo */}
          {/* for small device */}
          <section>
            <div>
              <h1 className="text-2xl font-medium text-primary-Color-blue-1 ">
                ZenTherapy
              </h1>
            </div>
          </section>
          {/* Actions */}
          <section className="flex items-center gap-5">
            {/* notification */}
            <div className="p-2 border rounded-full hover:bg-primary-Color-blue-1 hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
              <CiBellOn className="text-2xl "></CiBellOn>
            </div>
            {/* logout */}
            <div className="hidden md:block">
            <div className="border-l-2 pl-5 flex gap-3 items-center text-[#F15E4A]">
              <h3 className="font-medium cursor-pointer">Log Out</h3>
              {/* exit btn */}
              <div className="p-2 border-0 rounded-full bg-[#FFECEA] hover:bg-red-100 cursor-pointer">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4706 3.05881L17.0001 3.05881C17.4681 3.05881 17.9169 3.24473 18.2479 3.57568C18.5788 3.90663 18.7648 4.35549 18.7648 4.82351L18.7648 17.1765C18.7648 17.6445 18.5788 18.0933 18.2479 18.4243C17.9169 18.7552 17.4681 18.9412 17.0001 18.9412L13.4706 18.9412"
                    stroke="#F15E4A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.05884 15.4119L13.4706 11.0001L9.05884 6.58834"
                    stroke="#F15E4A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.4704 11L2.8822 11"
                    stroke="#F15E4A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            </div>
            {/* nav menu for small devices */}
            {/* icon */}
            <section className="">
              <button onClick={toggleNavbar}>
                <HiMenuAlt3 className="text-xl"></HiMenuAlt3>
              </button>
            </section>
          </section>
          {/* navbar menu main */}
          {isOpen && (
            <>
              {/* background effect */}
              <section className="fixed h-screen w-screen bg-black/50 lg:hidden top-0 right-0 ">
                {/* actual menu */}
                <section className="bg-white text-black absolute right-0 top-0 min-h-96 z-50 min-w-[270px] pb-4 ">
                  {/* userinfo and close btn */}
                  <section className="bg-primary-Color-blue-2 pt-6 pb-14 pl-6 pr-5">
                    {/* close btn */}
                    <IoMdClose
                      onClick={toggleNavbar}
                      className="text-3xl text-white"
                    ></IoMdClose>
                    {/* user section */}
                    <section className="flex flex-col items-end mt-14">
                      <img
                        src={userImage}
                        className="w-[74px] rounded-full"
                        alt=""
                      />
                      <h3 className="mt-4 text-3xl text-white font-semibold text-wrap">
                        Sagar Sani
                      </h3>
                      <p className="text-white mt-2 text-wrap">
                        sagarSani@gmail.com
                      </p>
                    </section>
                  </section>

                  {/* menu */}
                  <section className="pr-4 pt-5">
                    {/* home */}
                    <NavLink to={"/main/home"}>
                      <div
                        className={`flex hover:bg-sidebar-hover items-center gap-3 px-5 py-3 border-l-4 hover:border-l-sidebar-hover-border transition-all duration-50 ease-in-out ${getActiveClass(
                          "/main/home"
                        )}`}
                      >
                        <CiGrid41 className="text-xl mt-0.5" />
                        <p>Home</p>
                      </div>
                    </NavLink>

                    {/* New Listing */}
                    <NavLink to={"/main/newlisting"}>
                      <div
                        className={`flex hover:bg-sidebar-hover items-center gap-3 px-5 py-3 border-l-4 hover:border-l-sidebar-hover-border transition-all duration-50 ease-in-out ${getActiveClass(
                          "/main/newlisting"
                        )}`}
                      >
                        <GoPeople className="text-xl mt-0.5" />
                        <p>New Listing</p>
                      </div>
                    </NavLink>

                    {/* Search */}
                    <NavLink to={"/main/search"}>
                      <div
                        className={`flex hover:bg-sidebar-hover items-center gap-3 px-5 py-3 border-l-4 hover:border-l-sidebar-hover-border transition-all duration-50 ease-in-out ${getActiveClass(
                          "/main/search"
                        )}`}
                      >
                        <CiSearch className="text-2xl mt-0.5" />
                        <p>Search</p>
                      </div>
                    </NavLink>

                    {/* About */}
                    <NavLink to={"/main/about"}>
                      <div
                        className={`flex hover:bg-sidebar-hover items-center gap-3 px-5 py-3 border-l-4 hover:border-l-sidebar-hover-border transition-all duration-50 ease-in-out ${getActiveClass(
                          "/main/about"
                        )}`}
                      >
                        <ImFileText2 className="text-lg mt-0.5" />
                        <p>About</p>
                      </div>
                    </NavLink>
                    {/* Favorites */}
                    <NavLink to={"/main/favorites"}>
                      <div
                        className={`flex hover:bg-sidebar-hover items-center gap-3 px-5 py-3 border-l-4 hover:border-l-sidebar-hover-border transition-all duration-50 ease-in-out ${getActiveClass(
                          "/main/favorites"
                        )}`}
                      >
                        <IoIosHeartEmpty className="text-xl mt-0.5" />
                        <p>Favorites</p>
                      </div>
                    </NavLink>

                    {/* divider */}
                    <div className="my-5 px-5">
                      <hr />
                    </div>

                    {/* help center */}
                    <NavLink to={"/main/help"}>
                      <div
                        className={`flex hover:bg-sidebar-hover items-center gap-3 px-5 py-3 border-l-4 hover:border-l-sidebar-hover-border transition-all duration-50 ease-in-out ${getActiveClass(
                          "/main/help"
                        )}`}
                      >
                        <BsInfoSquare className="text-xl mt-0.5" />
                        <p>Help Center</p>
                      </div>
                    </NavLink>

                    {/* Settings */}
                    <NavLink to={"/main/settings"}>
                      <div
                        className={`flex hover:bg-sidebar-hover items-center gap-3 px-5 py-3 border-l-4 hover:border-l-sidebar-hover-border transition-all duration-50 ease-in-out ${getActiveClass(
                          "/main/settings"
                        )}`}
                      >
                        <IoSettingsOutline className="text-xl mt-0.5" />
                        <p>Settings</p>
                      </div>
                    </NavLink>
                    {/* Logout  */}
                    <div
                      className={`flex hover:bg-sidebar-hover items-center gap-3 px-5 py-3 border-l-4 border-white hover:border-l-sidebar-hover-border transition-all duration-50 ease-in-out`}
                    >
                      <CiLogout className="text-xl mt-0.5" />
                      <p>Logout</p>
                    </div>
                  </section>
                </section>
              </section>
            </>
          )}
        </section>
      </section>
    </div>
  );
};

export default Navbar;
