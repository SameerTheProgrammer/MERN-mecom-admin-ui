import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ICustomer } from "../../types";
import { Avatar, Space, Table, TableProps, Tag } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { getAllCustomers } from "../../http/apiFunction";

const columns: TableProps<ICustomer>["columns"] = [
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
                <Link to={`/user/get/${record.id}`}>
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
                    {record.firstName} {record.lastName}
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

const CustomerTable: React.FC = () => {
    const {
        data: allCustomers,
        // isError,
        // error,
        // isLoading,
    } = useQuery({
        queryKey: ["allCustomers"],
        queryFn: getAllCustomers,
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
                <Table columns={columns} dataSource={allCustomers} />
            </div>
        </>
    );
};

export default CustomerTable;
