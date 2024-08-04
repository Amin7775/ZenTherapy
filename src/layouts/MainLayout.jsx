import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar/Sidebar";
import Navbar from "../components/shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[100%]">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar - for large device only */}
        <section className="min-w-[250px] border-r border-r-[#E7E7E7] hidden lg:block">
          <Sidebar></Sidebar>
        </section>
        {/* main */}
        <section className="bg-[#EFF2F5] flex-1">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </section>
      </div>
    </div>
  );
};

export default MainLayout;
