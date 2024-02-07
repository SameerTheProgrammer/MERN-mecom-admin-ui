import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home.Page";
import LoginPage from "./pages/login/Login.Page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/auth/login",
        element: <LoginPage />,
    },
]);
