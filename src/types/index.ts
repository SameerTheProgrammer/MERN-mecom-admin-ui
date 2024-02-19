export type logoTypes = {
    viewBox: string;
    width: string;
    height: string;
};

export type AdminLoginCredentials = {
    email: string;
    password: string;
};

export interface IHttpError extends Error {
    response: {
        data: {
            errors: [
                {
                    location: string;
                    msg: string;
                    path: string;
                    type: string;
                },
            ];
        };
    };
}

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

export interface ICustomer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    role: string;
    avatar: TAvatar | null;
    updatedAt: number;
    createdAt: number;
}

export interface ISeller {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    role: string;
    avatar: TAvatar | null;
    description: string;
    address: string;
    zipCode: string;
    avaiableBalance: number;
    updatedAt: number;
    createdAt: number;
}
