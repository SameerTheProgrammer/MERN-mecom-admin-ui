import { AdminLoginCredentials } from "../types";
import { loginAdminApi, selfDataAdminApi } from "./api";

export const loginAdmin = async (credentials: AdminLoginCredentials) => {
    const { data } = await loginAdminApi(credentials);
    return data;
};

export const selfDataAdmin = async () => {
    const { data } = await selfDataAdminApi();
    return data;
};
