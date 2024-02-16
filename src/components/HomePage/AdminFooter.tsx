import { Layout } from "antd";

const { Footer } = Layout;

const AdminFooter = () => {
    return (
        <Footer style={{ textAlign: "center" }}>
            Mecom ecommerce ©{new Date().getFullYear()} Created by Sameer Kumar
        </Footer>
    );
};

export default AdminFooter;
