import { AdminLoginCredentials } from "../types";
import { api } from "./client";

// Auth Service
export const loginAdminApi = (credentials: AdminLoginCredentials) =>
    api.post("/admin/login", credentials);

export const selfDataAdminApi = () => api.get("/admin/self");

export const adminLogoutApi = () => api.post("/admin/logout");
