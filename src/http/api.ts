import { AdminLoginCredentials } from "../types";
import { api } from "./client";

// Auth Service
export const loginApi = async (credentials: AdminLoginCredentials) => {
    return await api.post("/admin/login", credentials);
};
