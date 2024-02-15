import axios from "axios";
import { adminAuthStore } from "../store";

export const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

const newAccessTokenAdminApi = async () => {
    await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/admin/newAccessToken`,
        {},
        { withCredentials: true },
    );
};

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status == 401 && !originalRequest._isRetry) {
            try {
                originalRequest._isRetry = true;
                const headers = { ...originalRequest.headers };
                await newAccessTokenAdminApi();
                return api.request({ ...originalRequest, headers });
            } catch (err) {
                // eslint-disable-next-line no-console
                console.error("Token refresh error", err);
                adminAuthStore.getState().logout();
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    },
);
