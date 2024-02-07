import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home.Page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
]);
