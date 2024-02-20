import { Avatar, Space, TableProps, Tag, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { FilterValue, SorterResult } from "antd/es/table/interface";
import { ISeller } from "../../types";

interface SellerTableColumnsProps {
    filteredInfo: Record<string, FilterValue | null>;
    sortedInfo: SorterResult<ISeller>;
}

const SellerTableColumns = ({
    filteredInfo,
    sortedInfo,
}: SellerTableColumnsProps) => {
    const columns: TableProps<ISeller>["columns"] = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
            sorter: true,
            rowScope: "row",
            fixed: "left",
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
            filteredValue: filteredInfo.id || null,
            sortOrder:
                sortedInfo.columnKey === "name" ? sortedInfo.order : null,
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
            ellipsis: {
                showTitle: false,
            },
            // filterSearch: true,
            render: (description) => (
                <Tooltip placement="topLeft" title={description}>
                    {description}
                </Tooltip>
            ),
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
            // filterSearch: true,
            ellipsis: {
                showTitle: false,
            },
            render: (address) => (
                <Tooltip placement="topLeft" title={address}>
                    {address}
                </Tooltip>
            ),
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
            // filterSearch: true,
            filteredValue: filteredInfo.id || null,
            sortOrder:
                sortedInfo.columnKey === "avaiableBalance"
                    ? sortedInfo.order
                    : null,
        },
        {
            title: "Created At",
            dataIndex: "createdAt",
            key: "createdAt",
            sorter: true,
            filteredValue: filteredInfo.id || null,
            sortOrder:
                sortedInfo.columnKey === "createdAt" ? sortedInfo.order : null,
            render: (_, { createdAt }) => {
                const time = new Date(createdAt);
                return <div>{time.toDateString()}</div>;
            },
            // filterSearch: true,
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
