import React, { Dispatch, SetStateAction, useState } from "react";
import {
    Button,
    Card,
    Col,
    Drawer,
    Form,
    GetProp,
    Input,
    Modal,
    Row,
    Space,
    Switch,
    Upload,
    UploadFile,
    UploadProps,
    message,
    theme,
} from "antd";
import { InboxOutlined, PlusOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";

interface NewSellerFormDrawerProps {
    drawerOpen: boolean;
    setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

const NewSellerFormDrawer: React.FC<NewSellerFormDrawerProps> = ({
    drawerOpen,
    setDrawerOpen,
}) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");

    const handleCancel = () => setPreviewOpen(false);

    const onClose = () => {
        setDrawerOpen(false);
    };

    const {
        token: { colorBgLayout },
    } = theme.useToken();

    const props: UploadProps = {
        name: "file",
        action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
        headers: {
            authorization: "authorization-text",
        },
        onChange(info) {
            if (info.file.status === "done") {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        beforeUpload: (file) => {
            const isPNG =
                file.type === "image/png" ||
                file.type === "image/jpg" ||
                file.type === "image/jpeg";
            if (!isPNG) {
                message.error(`${file.name} is not in correct image format`);
            }
            return isPNG || Upload.LIST_IGNORE;
        },
        progress: {
            strokeColor: {
                "0%": "#108ee9",
                "100%": "#87d068",
            },
            strokeWidth: 3,
            format: (percent) =>
                percent && `${parseFloat(percent.toFixed(2))}%`,
        },
        onPreview: async (file: UploadFile) => {
            if (!file.url && !file.preview) {
                file.preview = await getBase64(file.originFileObj as FileType);
            }

            setPreviewImage(file.url || (file.preview as string));
            setPreviewOpen(true);
            setPreviewTitle(
                file.name ||
                    file.url!.substring(file.url!.lastIndexOf("/") + 1),
            );
        },
    };

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
                        <Modal
                            open={previewOpen}
                            title={previewTitle}
                            footer={null}
                            onCancel={handleCancel}
                        >
                            <img
                                alt="example"
                                style={{ width: "100%" }}
                                src={previewImage}
                            />
                        </Modal>
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
                                            <ImgCrop
                                                rotationSlider
                                                zoomSlider
                                                showReset
                                                quality={1}
                                                cropShape="round"
                                                modalTitle="Crop the image"
                                            >
                                                <Upload
                                                    name="logo"
                                                    action="/upload.do"
                                                    accept=".png , .jpeg , .jpg"
                                                    listType="picture-circle"
                                                    maxCount={1}
                                                    {...props}
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
                                            </ImgCrop>
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Form.Item label="Banner" name="banner">
                                            <ImgCrop
                                                rotationSlider
                                                zoomSlider
                                                showReset
                                                aspectSlider
                                                quality={1}
                                                cropShape="rect"
                                                modalTitle="Crop the image"
                                                aspect={2}
                                            >
                                                <Upload.Dragger
                                                    name="logo"
                                                    action="/upload.do"
                                                    accept=".png , .jpeg , .jpg"
                                                    listType="picture"
                                                    maxCount={1}
                                                    {...props}
                                                >
                                                    <p className="ant-upload-drag-icon">
                                                        <InboxOutlined />
                                                    </p>
                                                    <p className="ant-upload-text">
                                                        Click or drag file to
                                                        this area to upload
                                                    </p>
                                                    <p className="ant-upload-hint">
                                                        Support for a single
                                                        upload.
                                                    </p>
                                                </Upload.Dragger>
                                            </ImgCrop>
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
