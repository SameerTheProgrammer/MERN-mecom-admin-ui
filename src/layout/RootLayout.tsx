import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Skeleton, Spin } from "antd";
import { useEffect } from "react";
import { adminAuthStore } from "../store";
import { selfDataAdmin } from "../http/apiFunction";
import { AxiosError } from "axios";

const RootLayout = () => {
    const { setAdmin } = adminAuthStore();

    // fetching logged user data
    const { data, isLoading } = useQuery({
        queryKey: ["selfData"],
        queryFn: selfDataAdmin,
        retry: (FailureCount: number, error) => {
            if (error instanceof AxiosError && error.response?.status == 401) {
                return false;
            }
            return FailureCount < 3;
        },
    });

    useEffect(() => {
        if (data) {
            setAdmin(data);
        }
    }, [data, setAdmin]);

    if (isLoading) {
        return (
            <div>
                <Skeleton />
                <Spin spinning={isLoading} fullscreen />
            </div>
        );
    }

    return <Outlet />;
};
export default RootLayout;
