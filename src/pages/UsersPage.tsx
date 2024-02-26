import { Button } from "antd";
import CustomerTable from "../components/UsersPage/CustomerTable";
import SellerTable from "../components/UsersPage/SellerTable";
import Filter from "./../components/UsersPage/Filter";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import NewSellerFormDrawer from "../components/UsersPage/NewSellerFormDrawer";

const UsersPage = () => {
    const [role, setRole] = useState("customer");
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <Filter setRole={setRole}>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => setDrawerOpen(true)}
                >
                    Add Seller
                </Button>
            </Filter>
            {role === "customer" ? <CustomerTable /> : <SellerTable />}

            <NewSellerFormDrawer
                drawerOpen={drawerOpen}
                setDrawerOpen={setDrawerOpen}
            />
        </>
    );
};

export default UsersPage;
