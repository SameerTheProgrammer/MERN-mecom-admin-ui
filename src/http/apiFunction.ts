import { AdminLoginCredentials } from "../types";
import {
    adminLogoutApi,
    getAllUsersApi,
    loginAdminApi,
    selfDataAdminApi,
} from "./api";

export const loginAdmin = async (credentials: AdminLoginCredentials) => {
    const { data } = await loginAdminApi(credentials);
    return data;
};

export const selfDataAdmin = async () => {
    const { data } = await selfDataAdminApi();
    return data;
};

export const adminLogout = async () => {
    await adminLogoutApi();
};

export const getAllUsers = async () => {
    const { data } = await getAllUsersApi();
    return data;
};
