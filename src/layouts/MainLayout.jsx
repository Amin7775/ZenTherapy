import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            This is main layout
           <Outlet></Outlet> 
        </div>
    );
};

export default MainLayout;