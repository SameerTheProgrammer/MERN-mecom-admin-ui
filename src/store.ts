import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type TAvatar = {
    public_id: string;
    url: string;
};

export interface IAdmin {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: string;
    avatar: TAvatar | null;
}

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
