// import React from "react";

import { Typography } from "antd";
import { adminAuthStore } from "../store";
const { Title } = Typography;

function DashboardPage() {
    const time = new Date().getHours();
    const { admin } = adminAuthStore();
    return (
        <>
            <div>
                <Title level={5}>
                    {time > 0 && time < 12 ? "Good Morning" : "Good Evening"},
                    <br />
                    {admin?.firstName} 😃
                </Title>
            </div>
        </>
    );
}

export default DashboardPage;
