import { Navigate, Outlet } from "react-router-dom";
import { adminAuthStore } from "../store";
import { Layout, theme } from "antd";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { adminLogout } from "../http/apiFunction";
import BreadCrumb from "../components/HomePage/Breadcumb";
import AdminFooter from "../components/HomePage/AdminFooter";
import AdminHeader from "../components/HomePage/AdminHeader";
import AdminSlider from "../components/HomePage/AdminSider";
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
                        <BreadCrumb
                            styles={{
                                padding: "5px 10px",
                                marginBottom: "10px",
                                borderBottom: "1px solid rgba(5, 5, 5, 0.06)",
                            }}
                        />
                        <div
                            style={{
                                padding: "0 10px",
                                minHeight: 360,
                                height: "100%",
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
