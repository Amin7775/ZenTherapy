import { BsInfoSquare } from "react-icons/bs";
import { CiGrid41, CiSearch } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { ImFileText2 } from "react-icons/im";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const getActiveClass = (path) => {
    return location.pathname === path
      ? "font-medium bg-sidebar-hover border-l-sidebar-hover-border"
      : "text-[#5C635A] border-white";
  };
  return (
    <div>
      {/* logo */}
      <section className="pt-16 pb-10 ">
        <h1 className="text-3xl font-medium text-primary-Color-blue-1 text-center">
          ZenTherapy
        </h1>
      </section>
      {/* menu */}
      <section>
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
        <NavLink to={"/main/helpcenter"}>
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
      </section>
    </div>
  );
};

export default Sidebar;
