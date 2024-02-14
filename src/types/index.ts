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
