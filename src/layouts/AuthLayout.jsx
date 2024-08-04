import { Outlet, ScrollRestoration } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='font-fontPoppins'>
            <Outlet></Outlet>
            <ScrollRestoration />
        </div>
    );
};

export default AuthLayout;