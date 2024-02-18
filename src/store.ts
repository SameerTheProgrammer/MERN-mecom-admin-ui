import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IAdmin } from "./types";

interface IAdminAuthState {
    admin: null | IAdmin;
    setAdmin: (admin: IAdmin) => void;
    logout: () => void;
}

export const adminAuthStore = create<IAdminAuthState>()(
    devtools((set) => ({
        admin: null,
        setAdmin: (admin) => set({ admin }),
        logout: () => set({ admin: null }),
    })),
);
