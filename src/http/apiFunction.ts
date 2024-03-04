import { AdminLoginCredentials } from "../types";
import {
    adminLogoutApi,
    getAllCustomersApi,
    getAllSellersApi,
    loginAdminApi,
    selfDataAdminApi,
    createNewSellerApi,
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

export const getAllCustomers = async (queryString: string) => {
    const { data } = await getAllCustomersApi(queryString);
    return data;
};

export const getAllSellers = async (queryString: string) => {
    const { data } = await getAllSellersApi(queryString);
    return data;
};

export const createNewSeller = async (sellerData: FormData) => {
    const { data } = await createNewSellerApi(sellerData);
    return data;
};
