import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllSellers } from "../../http/apiFunction";
import { ISeller } from "../../types";
import { Avatar, Space, Table, TableProps, Tag } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const columns: TableProps<ISeller>["columns"] = [
    {
        title: "Id",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (_text, record) => {
            return (
                <Link to={`/auth/seller/get/${record.id}`}>
                    {record.avatar !== null ? (
                        <Avatar
                            shape="circle"
                            size={"small"}
                            src={record.avatar.url}
                        />
                    ) : (
                        <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon={<UserOutlined />}
                        />
                    )}{" "}
                    {record.name}
                </Link>
            );
        },
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "Phone Number",
        dataIndex: "phoneNumber",
        key: "phoneNumber",
    },
    {
        title: "Role",
        key: "role",
        dataIndex: "role",
        render: (_, { role }) => {
            return (
                <Tag color="success" key={role}>
                    {role.toUpperCase()}
                </Tag>
            );
        },
    },
    {
        title: "Description",
        dataIndex: "description",
        key: "description",
    },
    {
        title: "Address",
        dataIndex: "address",
        key: "address",
    },
    {
        title: "Zip Code",
        dataIndex: "zipCode",
        key: "zipCode",
    },
    {
        title: "Avaiable Balance",
        dataIndex: "avaiableBalance",
        key: "avaiableBalance",
    },
    {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
        render: (_, { createdAt }) => {
            const time = new Date(createdAt);
            return <div>{time.toDateString()}</div>;
        },
    },
    {
        title: "Action",
        key: "action",
        render: () => (
            <Space size="middle">
                <Tag bordered={false} color="success" key="Delete">
                    Delete
                </Tag>
            </Space>
        ),
    },
];

const SellerTable: React.FC = () => {
    const {
        data: allSellers,
        // isError,
        // error,
        // isLoading,
    } = useQuery({
        queryKey: ["allSellers"],
        queryFn: getAllSellers,
    });

    return (
        <>
            <div style={{ marginTop: "24px" }}>
                {/* {isError && <div>{error.message}</div>}
                {isLoading && <div>Loading....</div>}
                {allUsers &&
                    allUsers.map((user: IAdmin) => {
                        return <div>{user.firstName}</div>;
                    })} */}
                <Table columns={columns} dataSource={allSellers} />
            </div>
        </>
    );
};

export default SellerTable;
