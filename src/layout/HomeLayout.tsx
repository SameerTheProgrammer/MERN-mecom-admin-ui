import { Navigate, Outlet } from "react-router-dom";
import { adminAuthStore } from "../store";
import { Layout, theme } from "antd";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { adminLogout } from "../http/apiFunction";
import BreadCrumb from "../components/Breadcumb";
import AdminFooter from "../components/AdminFooter";
import AdminHeader from "../components/AdminHeader";
import AdminSlider from "../components/AdminSider";
const { Content } = Layout;

const HomeLayout = () => {
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
                <AdminSlider
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                />
                <Layout style={layoutStyle}>
                    <AdminHeader
                        colorBgContainer={colorBgContainer}
                        logoutMutate={logoutMutate}
                    />
                    <Content
                        style={{ margin: "0 10px 0", overflow: "initial" }}
                    >
                        <BreadCrumb styles={{ margin: "5px 5px" }} />
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                height: "100%",
                                background: colorBgContainer,
                            }}
                        >
                            <Outlet />
                        </div>
                    </Content>
                    <AdminFooter />
                </Layout>
            </Layout>
        </div>
    );
};

export default HomeLayout;
