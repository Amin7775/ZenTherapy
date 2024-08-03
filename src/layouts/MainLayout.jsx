import { Outlet } from "react-router-dom";
import Sidebar from "../components/shared/Sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar - for large device only */}
        <section className="w-[250px] border-r border-r-[#E7E7E7] hidden lg:block">
          <Sidebar></Sidebar>
        </section>
        {/* main */}
        <section className="bg-[#EFF2F5] flex-1">
          <Outlet></Outlet>
        </section>
      </div>
    </div>
  );
};

export default MainLayout;
