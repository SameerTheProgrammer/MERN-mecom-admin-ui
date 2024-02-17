import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/login/LoginPage";
import HomeLayout from "./layout/HomeLayout";
import UnauthorizedLayout from "./layout/UnauthorizedLayout";
import RootLayout from "./layout/RootLayout";
import UsersPage from "./pages/UsersPage";
import ProductsPage from "./pages/ProductsPage";
import SellersPage from "./pages/SellersPage";
import OrdersPage from "./pages/OrdersPage";
import EventsPage from "./pages/EventsPage ";
import WithdrawRequestPage from "./pages/WithdrawRequestPage";

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
                    {
                        path: "users",
                        element: <UsersPage />,
                    },
                    {
                        path: "sellers",
                        element: <SellersPage />,
                    },
                    {
                        path: "products",
                        element: <ProductsPage />,
                    },
                    {
                        path: "orders",
                        element: <OrdersPage />,
                    },
                    {
                        path: "events",
                        element: <EventsPage />,
                    },
                    {
                        path: "withdrawal-request",
                        element: <WithdrawRequestPage />,
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
