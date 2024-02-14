import { Navigate, Outlet } from "react-router-dom";
import { adminAuthStore } from "../store";

const DashboardLayout = () => {
    const { admin } = adminAuthStore();
    if (admin === null) {
        return <Navigate to={"/auth/login"} replace={true} />;
    }
    return (
        <div>
            <h1>Dashboard Component</h1>
            <Outlet />
        </div>
    );
};

export default DashboardLayout;
