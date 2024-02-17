import { Avatar, Badge, Dropdown, Flex, Layout, Space } from "antd";
import { BellFilled, DownOutlined } from "@ant-design/icons";
import { UseMutateFunction } from "@tanstack/react-query";
const { Header } = Layout;

interface AdminHeaderProps {
    colorBgContainer: string | number;
    logoutMutate: UseMutateFunction<void, Error, void, unknown>;
}

const AdminHeader = ({ colorBgContainer, logoutMutate }: AdminHeaderProps) => {
    return (
        <div>
            <Header
                style={{
                    paddingRight: "16px",
                    background: colorBgContainer,
                }}
            >
                <Flex align="center" justify="flex-end">
                    <Space size="middle">
                        <Badge
                            count={5}
                            size="small"
                            status="success"
                            title="Notifications"
                        >
                            <BellFilled style={{ fontSize: "1.25rem" }} />
                        </Badge>
                        <Dropdown
                            menu={{
                                items: [
                                    {
                                        key: "logout",
                                        label: "Logout",
                                        onClick: () => logoutMutate(),
                                    },
                                ],
                            }}
                            placement="bottomRight"
                            arrow={{ pointAtCenter: true }}
                        >
                            <Flex gap="small" align="center">
                                <Avatar
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    size="large"
                                />
                                <Avatar
                                    shape="square"
                                    size={20}
                                    icon={<DownOutlined />}
                                    style={{
                                        background: "rgba(0, 0, 0, 0.02)",
                                        color: "#000",
                                    }}
                                />
                            </Flex>
                        </Dropdown>
                    </Space>
                </Flex>
            </Header>
        </div>
    );
};

export default AdminHeader;
