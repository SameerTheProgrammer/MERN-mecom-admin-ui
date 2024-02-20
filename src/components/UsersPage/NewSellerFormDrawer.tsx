import React, { Dispatch, SetStateAction } from "react";
import { Button, Drawer, Space } from "antd";

interface NewSellerFormDrawerProps {
    drawerOpen: boolean;
    setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const NewSellerFormDrawer: React.FC<NewSellerFormDrawerProps> = ({
    drawerOpen,
    setDrawerOpen,
}) => {
    const onClose = () => {
        setDrawerOpen(false);
    };

    return (
        <>
            <Drawer
                width={720}
                title="Create a new seller account"
                onClose={onClose}
                open={drawerOpen}
                destroyOnClose={true}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="primary">Submit</Button>
                    </Space>
                }
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};

export default NewSellerFormDrawer;
