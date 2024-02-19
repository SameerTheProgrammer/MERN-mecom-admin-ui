import CustomerTable from "../components/UsersPage/CustomerTable";
import SellerTable from "../components/UsersPage/SellerTable";
import Filter from "./../components/UsersPage/Filter";
import { useState } from "react";

const UsersPage = () => {
    const [role, setRole] = useState("customer");
    return (
        <>
            <Filter setRole={setRole} />
            {role === "customer" ? <CustomerTable /> : <SellerTable />}
        </>
    );
};

export default UsersPage;
