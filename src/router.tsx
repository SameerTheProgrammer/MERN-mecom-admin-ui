import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/login/LoginPage";
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
