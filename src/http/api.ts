import { AdminLoginCredentials } from "../types";
import { api } from "./client";

// Auth Service
export const loginAdminApi = (credentials: AdminLoginCredentials) =>
    api.post("/admin/login", credentials);

export const selfDataAdminApi = () => api.get("/admin/self");

export const adminLogoutApi = () => api.post("/admin/logout");

export const getAllCustomersApi = (queryString: string) =>
    api.post(`/auth/user/getAll?${queryString}`);

export const getAllSellersApi = () => api.post("/auth/seller/getAll");

export const createNewSellerApi = (sellerData: FormData) =>
    api.post("/auth/seller/create", sellerData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
