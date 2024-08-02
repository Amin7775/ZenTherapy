import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div>
            this is AuthLayout
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;