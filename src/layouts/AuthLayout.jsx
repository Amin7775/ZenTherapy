import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='font-fontPoppins'>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;