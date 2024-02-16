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
    MenuProps,
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

const sidebarItems: MenuItem[] = [
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
                        items={sidebarItems}
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
