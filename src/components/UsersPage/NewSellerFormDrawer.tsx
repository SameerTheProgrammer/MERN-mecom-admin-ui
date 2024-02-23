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
    Switch,
    Upload,
    theme,
} from "antd";
import { InboxOutlined, PlusOutlined } from "@ant-design/icons";
// import ImgCrop from "antd-img-crop";

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
                            <Card bordered={false} title={"Basic info"}>
                                <Row>
                                    <Col span={24}>
                                        <Form.Item
                                            label="Name"
                                            required
                                            name="name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Name is required",
                                                },
                                                {
                                                    min: 2,
                                                    message:
                                                        "Name should be between least 2 chars and maximum 100 chars",
                                                },
                                                {
                                                    max: 100,
                                                    message:
                                                        "Name should be between least 2 chars and maximum 100 chars",
                                                },
                                            ]}
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
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message:
                                                                "Email is required",
                                                        },
                                                        {
                                                            type: "email",
                                                            message:
                                                                "Invalid email",
                                                        },
                                                    ]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label="Phone Number"
                                                    required
                                                    name="phoneNumber"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message:
                                                                "Phone is required",
                                                        },
                                                    ]}
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
                            <Card bordered={false} title={"Security info"}>
                                <Row>
                                    <Col span={24}>
                                        <Row gutter={16}>
                                            <Col span={12}>
                                                <Form.Item
                                                    name="password"
                                                    label="Password"
                                                    hasFeedback
                                                    required
                                                    rules={[
                                                        {
                                                            min: 10,
                                                            message:
                                                                "Password should be consists of atleast 10 character",
                                                        },
                                                    ]}
                                                >
                                                    <Input.Password />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    name="confirm"
                                                    label="Confirm Password"
                                                    dependencies={["password"]}
                                                    hasFeedback
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message:
                                                                "Please confirm your password!",
                                                        },
                                                        ({
                                                            getFieldValue,
                                                        }) => ({
                                                            validator(
                                                                _,
                                                                value,
                                                            ) {
                                                                if (
                                                                    !value ||
                                                                    getFieldValue(
                                                                        "password",
                                                                    ) === value
                                                                ) {
                                                                    return Promise.resolve();
                                                                }
                                                                return Promise.reject(
                                                                    new Error(
                                                                        "The new password that you entered do not match!",
                                                                    ),
                                                                );
                                                            },
                                                        }),
                                                    ]}
                                                >
                                                    <Input.Password />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={24}>
                            <Card bordered={false} title={"Additional info"}>
                                <Row>
                                    <Col span={24}>
                                        <Form.Item
                                            label="Description"
                                            name="description"
                                            rules={[
                                                {
                                                    max: 3000,
                                                    message:
                                                        "Description should be only 3000 characters",
                                                },
                                            ]}
                                        >
                                            <Input.TextArea
                                                showCount
                                                maxLength={3000}
                                                autoSize={{
                                                    minRows: 3,
                                                    maxRows: 15,
                                                }}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col span={24}>
                                        <Row gutter={16}>
                                            <Col span={12}>
                                                <Form.Item
                                                    label="Address"
                                                    required
                                                    name="address"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message:
                                                                "Address is required",
                                                        },
                                                        {
                                                            max: 255,
                                                            message:
                                                                "Address should be only 3000 characters",
                                                        },
                                                    ]}
                                                >
                                                    <Input.TextArea
                                                        showCount
                                                        maxLength={255}
                                                    />
                                                </Form.Item>
                                            </Col>
                                            <Col span={12}>
                                                <Form.Item
                                                    label="Zip Code"
                                                    required
                                                    name="zipCode"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message:
                                                                "Zip Code is requiered",
                                                        },
                                                        {
                                                            type: "integer",
                                                            message:
                                                                "invalid zip code",
                                                        },
                                                    ]}
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
                            <Card bordered={false} title={"Images"}>
                                <Row gutter={16}>
                                    <Col span={12}>
                                        <Form.Item label="Logo" name="logo">
                                            {/* <ImgCrop> */}
                                            <Upload
                                                name="logo"
                                                action="/upload.do"
                                                accept=".png , .jpeg , .jpg"
                                                listType="picture-circle"
                                                maxCount={1}
                                            >
                                                <button
                                                    style={{
                                                        border: 0,
                                                        background: "none",
                                                    }}
                                                    type="button"
                                                >
                                                    <PlusOutlined />
                                                    <div
                                                        style={{
                                                            marginTop: 8,
                                                        }}
                                                    >
                                                        Upload
                                                    </div>
                                                </button>
                                            </Upload>

                                            {/* </ImgCrop> */}
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Banner" name="banner">
                                            {/* <ImgCrop> */}
                                            <Upload.Dragger
                                                name="logo"
                                                action="/upload.do"
                                                // fileList={}
                                                // accept="png"
                                                listType="picture"
                                                maxCount={1}
                                            >
                                                <p className="ant-upload-drag-icon">
                                                    <InboxOutlined />
                                                </p>
                                                <p className="ant-upload-text">
                                                    Click or drag file to this
                                                    area to upload
                                                </p>
                                                <p className="ant-upload-hint">
                                                    Support for a single upload.
                                                </p>
                                            </Upload.Dragger>
                                            {/* </ImgCrop> */}
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={24}>
                            <Card bordered={false} title={"Other properties"}>
                                <Row>
                                    <Col span={24}>
                                        <Form.Item name="description">
                                            <Form.Item name="ban" label="Ban">
                                                <Switch
                                                    unCheckedChildren="ban"
                                                    checkedChildren="active"
                                                />
                                            </Form.Item>
                                        </Form.Item>
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
