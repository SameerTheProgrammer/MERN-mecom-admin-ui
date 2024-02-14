import { Outlet } from "react-router-dom";

const UnauthorizedLayout = () => {
    return (
        <div>
            <h1>Unauthorized Component</h1>
            <Outlet />
        </div>
    );
};

export default UnauthorizedLayout;
