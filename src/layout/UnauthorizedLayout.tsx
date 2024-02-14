import { Navigate, Outlet } from "react-router-dom";
import { adminAuthStore } from "../store";

const UnauthorizedLayout = () => {
    const { admin } = adminAuthStore();
    if (admin !== null) {
        return <Navigate to={"/"} replace={true} />;
    }
    return (
        <div>
            <h1>Unauthorized Component</h1>
            <Outlet />
        </div>
    );
};

export default UnauthorizedLayout;
