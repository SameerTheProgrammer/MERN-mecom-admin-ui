import { NavLink, Navigate, Outlet } from "react-router-dom";
import { adminAuthStore } from "../store";
import { Breadcrumb, Flex, Layout, Menu, MenuProps, theme } from "antd";
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
import { useState } from "react";
import { Logo } from "../components/icons/Logo";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    key: React.Key,
    label: React.ReactNode,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem("/", <NavLink to="/">Dashboard</NavLink>, <HomeOutlined />),
    getItem("/users", <NavLink to="/">All Users</NavLink>, <TeamOutlined />),
    getItem(
        "/sellers",
        <NavLink to="/">All Sellers</NavLink>,
        <ShopOutlined />,
        // [getItem("Tom", "3"), getItem("Bill", "4"), getItem("Alex", "5")],
    ),
    getItem(
        "/products",
        <NavLink to="/">All Products</NavLink>,
        <ProductOutlined />,
    ),
    getItem(
        "/orders",
        <NavLink to="/">All Orders</NavLink>,
        <ShoppingOutlined />,
    ),
    getItem("/events", <NavLink to="/">All Events</NavLink>, <GiftOutlined />),
    getItem(
        "/seller-withdraws",
        <NavLink to="/">Withdraw Request</NavLink>,
        <WalletOutlined />,
    ),
    getItem(
        "/Settings",
        <NavLink to="/">Settings</NavLink>,
        <SettingOutlined />,
    ),
];

const DashboardLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const layoutStyle = {
        marginLeft: collapsed ? 80 : 200,
    };

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const { admin } = adminAuthStore();
    if (admin === null) {
        return <Navigate to={"/auth/login"} replace={true} />;
    }

    return (
        <div>
            <Layout style={{ minHeight: "100vh" }}>
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
                        items={items}
                    />
                </Sider>
                <Layout style={layoutStyle}>
                    <Header
                        style={{ padding: 0, background: colorBgContainer }}
                    >
                        {" "}
                    </Header>
                    <Content
                        style={{ margin: "24px 16px 0", overflow: "initial" }}
                    >
                        <Breadcrumb style={{ margin: "16px 0" }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                background: colorBgContainer,
                            }}
                        >
                            <Outlet />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: "center" }}>
                        Mecom ecommerce ©{new Date().getFullYear()} Created by
                        Sameer Kumar
                    </Footer>
                </Layout>
            </Layout>
        </div>
    );
};

export default DashboardLayout;
