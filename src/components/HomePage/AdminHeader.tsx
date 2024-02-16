import { Avatar, Badge, Dropdown, Flex, Image, Layout, Space } from "antd";
import { BellFilled } from "@ant-design/icons";
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
                    paddingRight: "2rem",
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
                            <Avatar
                                icon={
                                    <Image
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                        preview={false}
                                    />
                                }
                                size="large"
                            />
                        </Dropdown>
                    </Space>
                </Flex>
            </Header>
        </div>
    );
};

export default AdminHeader;
