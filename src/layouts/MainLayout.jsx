import { Outlet, ScrollRestoration } from "react-router-dom";
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
        <section className="bg-[#EFF2F5] flex-1 relative">
          <div className="sticky w-full z-50 border-b drop-shadow-sm">
            <Navbar></Navbar>
          </div>
          <Outlet></Outlet>
        </section>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
