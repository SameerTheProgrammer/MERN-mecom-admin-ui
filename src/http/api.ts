import { AdminLoginCredentials } from "../types";
import { api } from "./client";

// Auth Service
export const loginApi = (credentials: AdminLoginCredentials) =>
    api.post("/admin/login", credentials);
