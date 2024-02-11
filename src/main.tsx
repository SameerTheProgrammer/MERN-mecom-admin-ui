import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import "./index.css";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#4ED93F",
                    colorLink: "#3FD99B",
                },
            }}
        >
            <RouterProvider router={router} />
        </ConfigProvider>
    </React.StrictMode>,
);
