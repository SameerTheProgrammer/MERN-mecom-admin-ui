import { Avatar, Space, TableProps, Tag, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { ISeller } from "../../types";

const SellerTableColumns = () => {
    const columns: TableProps<ISeller>["columns"] = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
            sorter: true,
            rowScope: "row",
            fixed: "left",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            sorter: true,
            ellipsis: true,
            render: (_text, record) => {
                return (
                    <Link to={`/auth/seller/get/${record.id}`}>
                        <Space>
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
                            )}
                            {record.name}
                        </Space>
                    </Link>
                );
            },
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
            // filterSearch: true,
        },
        {
            title: "Phone Number",
            dataIndex: "phoneNumber",
            key: "phoneNumber",
            // filterSearch: true,
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
            render: (_, { description }) => {
                return (
                    <Tooltip title={description}>
                        {description?.length > 50
                            ? `${description?.slice(0, 50)}...`
                            : description}
                    </Tooltip>
                );
            },
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
            // filterSearch: true,
            render: (_, { address }) => {
                return (
                    <Tooltip title={address}>
                        {address?.length > 50
                            ? `${address?.slice(0, 50)}...`
                            : address}
                    </Tooltip>
                );
            },
        },
        {
            title: "Zip Code",
            dataIndex: "zipCode",
            key: "zipCode",
            // filterSearch: true,
        },
        {
            title: "Avaiable Balance",
            dataIndex: "avaiableBalance",
            key: "avaiableBalance",
            sorter: true,
        },
        {
            title: "Created At",
            dataIndex: "createdAt",
            key: "createdAt",
            sorter: true,
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
    return columns;
};
export default SellerTableColumns;
