import { useLocation, Link } from "react-router-dom";
import { Breadcrumb } from "antd";
import { HomeOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";

const BreadCrumb: React.FC = () => {
    const location = useLocation();

    const breadCrumbView = () => {
        const { pathname } = location;
        const pathnames = pathname.split("/").filter((item) => item);
        const capitalize = (s: string) =>
            s.charAt(0).toUpperCase() + s.slice(1);

        return (
            <div style={{ margin: "16px 0" }}>
                <Breadcrumb separator={<RightOutlined />}>
                    {pathnames.length > 0 && (
                        <Breadcrumb.Item>
                            <Link to="/">
                                <HomeOutlined />
                            </Link>
                        </Breadcrumb.Item>
                    )}
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const isLast = index === pathnames.length - 1;
                        return isLast ? (
                            <Breadcrumb.Item key={index}>
                                {capitalize(name)}
                            </Breadcrumb.Item>
                        ) : (
                            <Breadcrumb.Item key={index}>
                                <Link to={`${routeTo}`}>
                                    {capitalize(name)}
                                </Link>
                            </Breadcrumb.Item>
                        );
                    })}
                </Breadcrumb>
            </div>
        );
    };

    return <>{breadCrumbView()}</>;
};

export default BreadCrumb;
