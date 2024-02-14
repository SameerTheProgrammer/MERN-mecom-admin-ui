import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div>
            <h1>Dashboard Component</h1>
            <Outlet />
        </div>
    );
};

export default DashboardLayout;
