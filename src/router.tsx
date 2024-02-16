import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/login/LoginPage";
import HomeLayout from "./layout/HomeLayout";
import UnauthorizedLayout from "./layout/UnauthorizedLayout";
import RootLayout from "./layout/RootLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <HomeLayout />,
                children: [
                    {
                        path: "",
                        element: <DashboardPage />,
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
