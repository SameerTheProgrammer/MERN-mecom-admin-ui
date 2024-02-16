import { NavLink, Navigate, Outlet } from "react-router-dom";
import { adminAuthStore } from "../store";
import {
    Avatar,
    Badge,
    Breadcrumb,
    Dropdown,
    Flex,
    Layout,
    Menu,
    Space,
    theme,
} from "antd";
import {
    HomeOutlined,
    ShoppingOutlined,
    TeamOutlined,
    ShopOutlined,
    ProductOutlined,
    SettingOutlined,
    GiftOutlined,
    WalletOutlined,
    BellFilled,
} from "@ant-design/icons";
import { useState } from "react";
import { Logo } from "../components/icons/Logo";
import { useMutation } from "@tanstack/react-query";
import { adminLogout } from "../http/apiFunction";
const { Header, Content, Footer, Sider } = Layout;

const items = [
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

const DashboardLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const layoutStyle = {
        marginLeft: collapsed ? 80 : 200,
    };

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const { logout: logoutFromStore, admin } = adminAuthStore();
    const { mutate: logoutMutate } = useMutation({
        mutationKey: ["logout"],
        mutationFn: adminLogout,
        onSuccess: async () => {
            logoutFromStore();
            return;
        },
    });

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
                        style={{
                            paddingRight: "2rem",
                            background: colorBgContainer,
                        }}
                    >
                        <Flex align="center" justify="flex-end">
                            <Space size="middle">
                                <Badge
                                    count={5}
                                    size="small"
                                    status="success"
                                    title="Notifications"
                                >
                                    <BellFilled />
                                </Badge>
                                <Dropdown
                                    menu={{
                                        items: [
                                            {
                                                key: "logout",
                                                label: "Logout",
                                                onClick: () => logoutMutate(),
                                            },
                                        ],
                                    }}
                                    placement="bottomRight"
                                    arrow={{ pointAtCenter: true }}
                                >
                                    <Avatar
                                        icon={<TeamOutlined />}
                                        size="large"
                                    />
                                </Dropdown>
                            </Space>
                        </Flex>
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
