import React from "react";

export type logoTypes = {
    viewBox: string;
    width: string;
    height: string;
};

export interface ILogoPageProps {
    logo: React.JSX.Element;
    name: string;
}
