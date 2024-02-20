import { Avatar, Space, TableProps, Tag } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { ICustomer } from "../../types";
import { FilterValue, SorterResult } from "antd/es/table/interface";

interface CustomerTableColumnsProps {
    filteredInfo: Record<string, FilterValue | null>;
    sortedInfo: SorterResult<ICustomer>;
}

const CustomerTableColumns = ({
    filteredInfo,
    sortedInfo,
}: CustomerTableColumnsProps) => {
    const columns: TableProps<ICustomer>["columns"] = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
            sorter: true,
            rowScope: "row",
            // filterSearch: true,
            filteredValue: filteredInfo.id || null,
            sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            sorter: true,
            // filterSearch: true,
            filteredValue: filteredInfo.name || null,
            sortOrder:
                sortedInfo.columnKey === "name" ? sortedInfo.order : null,
            render: (_text, record) => (
                <Link to={`/user/get/${record.id}`}>
                    <Space>
                        {record.avatar !== null ? (
                            <Avatar
                                shape="circle"
                                size="small"
                                src={record.avatar.url}
                            />
                        ) : (
                            <Avatar
                                style={{ backgroundColor: "#87d068" }}
                                icon={<UserOutlined />}
                            />
                        )}
                        {`${record.firstName} ${record.lastName}`}
                    </Space>
                </Link>
            ),
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
            title: "Gender",
            dataIndex: "gender",
            key: "gender",
            filters: [
                { text: "Male", value: "male" },
                { text: "Female", value: "female" },
            ],
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
            sorter: (a, b) =>
                new Date(a.createdAt).getTime() -
                new Date(b.createdAt).getTime(),
            // filterSearch: true,
            filteredValue: filteredInfo.id || null,
            sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
        },
        {
            title: "Action",
            key: "action",
            render: () => (
                <Space size="middle">
                    <Tag bordered={false} color="success">
                        Delete
                    </Tag>
                </Space>
            ),
        },
    ];

    return columns;
};

export default CustomerTableColumns;
