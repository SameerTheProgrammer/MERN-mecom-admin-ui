import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home.Page";
import LoginPage from "./pages/login/Login.Page";
import DashboardLayout from "./layout/DashboardLayout";
import UnauthorizedLayout from "./layout/UnauthorizedLayout";
import RootLayout from "./layout/RootLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <DashboardLayout />,
                children: [
                    {
                        path: "",
                        element: <HomePage />,
                    },
                ],
            },
            {
                path: "auth",
                element: <UnauthorizedLayout />,
                children: [
                    {
                        path: "login",
                        element: <LoginPage />,
                    },
                ],
            },
        ],
    },
]);
