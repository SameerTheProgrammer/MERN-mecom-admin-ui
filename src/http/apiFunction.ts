import { AdminLoginCredentials } from "../types";
import {
    adminLogoutApi,
    getAllCustomersApi,
    getAllSellersApi,
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

export const getAllCustomers = async () => {
    const { data } = await getAllCustomersApi();
    return data;
};

export const getAllSellers = async () => {
    const { data } = await getAllSellersApi();
    return data;
};
