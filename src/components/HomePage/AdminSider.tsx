import { Flex, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Logo } from "../icons/Logo";
import {
    HomeOutlined,
    ShoppingOutlined,
    TeamOutlined,
    ShopOutlined,
    ProductOutlined,
    SettingOutlined,
    GiftOutlined,
    WalletOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import React from "react";

const sidebarItems = [
    {
        key: "/",
        label: <NavLink to="/">Dashboard</NavLink>,
        icon: <HomeOutlined />,
    },
    {
        key: "/users",
        label: <NavLink to="/users">All Users</NavLink>,
        icon: <TeamOutlined />,
    },
    {
        key: "/sellers",
        label: <NavLink to="/sellers">All Sellers</NavLink>,
        icon: <ShopOutlined />,
    },
    {
        key: "/products",
        label: <NavLink to="/products">All Products</NavLink>,
        icon: <ProductOutlined />,
    },
    {
        key: "/orders",
        label: <NavLink to="/orders">All Orders</NavLink>,
        icon: <ShoppingOutlined />,
    },
    {
        key: "/events",
        label: <NavLink to="/events">All Events</NavLink>,
        icon: <GiftOutlined />,
    },
    {
        key: "/withdrawal-request",
        label: <NavLink to="/withdrawal-request">Withdraw Request</NavLink>,
        icon: <WalletOutlined />,
    },
    {
        key: "/settings",
        label: <NavLink to="/">Settings</NavLink>,
        icon: <SettingOutlined />,
    },
];

const AdminSider: React.FC = () => {
    return (
        <Sider
            theme="light"
            style={{
                overflow: "auto",
                height: "100vh",
                position: "fixed",
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <Flex
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Logo viewBox="10 10 250 150" width="80" height="80" />

                <div
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#00CC66 ",
                    }}
                >
                    Mecom
                </div>
            </Flex>
            <Menu
                theme="light"
                defaultSelectedKeys={["/"]}
                mode="inline"
                items={sidebarItems}
            />
        </Sider>
    );
};

export default AdminSider;
