import React, { Dispatch, SetStateAction } from "react";
import {
    Button,
    Card,
    Col,
    Drawer,
    Form,
    Input,
    Row,
    Space,
    theme,
} from "antd";

interface NewSellerFormDrawerProps {
    drawerOpen: boolean;
    setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const NewSellerFormDrawer: React.FC<NewSellerFormDrawerProps> = ({
    drawerOpen,
    setDrawerOpen,
}) => {
    const onClose = () => {
        setDrawerOpen(false);
    };

    const {
        token: { colorBgLayout },
    } = theme.useToken();

    return (
        <>
            <Drawer
                width={720}
                title="Create a new seller account"
                onClose={onClose}
                open={drawerOpen}
                destroyOnClose={true}
                styles={{ body: { background: colorBgLayout } }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="primary">Submit</Button>
                    </Space>
                }
            >
                <Form layout="vertical">
                    <Row gutter={[16, 16]}>
                        <Col span={24}>
                            <Card
                                bordered={false}
                                title={"Basic info"}
                                // style={{ width: 300 }}
                            >
                                <Row>
                                    <Col span={24}>
                                        <Form.Item
                                            label="Name"
                                            required
                                            name="name"
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24}>
                                        <Row gutter={16}>
                                            <Col span={12}>
                                                <Form.Item
                                                    label="Email"
                                                    required
                                                    name="email"
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label="Phone Number"
                                                    required
                                                    name="phoneNumber"
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={24}>
                            <Card
                                bordered={false}
                                title={"Additional info"}
                                // style={{ width: 300 }}
                            >
                                <Row>
                                    <Col span={24}>
                                        <Form.Item
                                            label="Description"
                                            required
                                            name="description"
                                        >
                                            <Input.TextArea
                                                showCount
                                                maxLength={255}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24}>
                                        <Row gutter={16}>
                                            <Col span={12}>
                                                <Form.Item
                                                    label="Email"
                                                    required
                                                    name="email"
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label="Phone Number"
                                                    required
                                                    name="phoneNumber"
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    );
};

export default NewSellerFormDrawer;
