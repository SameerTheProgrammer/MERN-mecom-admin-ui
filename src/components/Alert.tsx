import { Alert as AntdAlert } from "antd";
import React from "react";

type TAlert = {
    message: string;
    isClosable: boolean;
    isShowIcon: boolean;
    type?: "success" | "info" | "warning" | "error";
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomAlert = ({
    message = "message",
    isClosable = true,
    isShowIcon = true,
    type = "success",
    setVisible,
}: TAlert) => {
    const handleClose = () => {
        setVisible(false);
    };
    return (
        <AntdAlert
            message={message}
            type={type}
            closable={isClosable}
            afterClose={handleClose}
            showIcon={isShowIcon}
        />
    );
};

export default CustomAlert;
