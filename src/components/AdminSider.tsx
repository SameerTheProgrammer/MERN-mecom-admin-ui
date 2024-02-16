import { Flex, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Logo } from "./icons/Logo";
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
import React, { SetStateAction } from "react";

const sidebarItems = [
    {
        key: "/",
        label: <NavLink to="/">Dashboard</NavLink>,
        icon: <HomeOutlined />,
    },
    {
        key: "/users",
        label: <NavLink to="/">All Users</NavLink>,
        icon: <TeamOutlined />,
    },
    {
        key: "/sellers",
        label: <NavLink to="/">All Sellers</NavLink>,
        icon: <ShopOutlined />,
    },
    {
        key: "/products",
        label: <NavLink to="/">All Products</NavLink>,
        icon: <ProductOutlined />,
    },
    {
        key: "/orders",
        label: <NavLink to="/">All Orders</NavLink>,
        icon: <ShoppingOutlined />,
    },
    {
        key: "/events",
        label: <NavLink to="/">All Events</NavLink>,
        icon: <GiftOutlined />,
    },
    {
        key: "/seller-withdraws",
        label: <NavLink to="/">Withdraw Request</NavLink>,
        icon: <WalletOutlined />,
    },
    {
        key: "/Settings",
        label: <NavLink to="/">Settings</NavLink>,
        icon: <SettingOutlined />,
    },
];

interface AdminSiderProps {
    collapsed: boolean;
    setCollapsed: React.Dispatch<SetStateAction<boolean>>;
}

const AdminSider: React.FC<AdminSiderProps> = ({ collapsed, setCollapsed }) => {
    return (
        <Sider
            theme="light"
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
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
                        opacity: `${collapsed ? "0" : "1"}`,
                        transition: "opacity 0.2s ease 0.2s",
                    }}
                >
                    {!collapsed && "Mecom"}
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
