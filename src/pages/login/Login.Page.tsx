import {
    Button,
    Card,
    Checkbox,
    Flex,
    Form,
    Input,
    Layout,
    Space,
    Typography,
} from "antd";
import { LockFilled, MailOutlined } from "@ant-design/icons";
import { Logo } from "../../components/icons/Logo";

const { Title, Paragraph } = Typography;

const LoginPage = () => {
    return (
        <>
            <Layout
                style={{
                    height: "100vh",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <Space>
                    <Layout.Content
                        style={{
                            height: "500px",
                        }}
                    >
                        <Logo viewBox="0 0 270 10" width="300" height="300" />
                        <Title
                            level={1}
                            style={{
                                display: "flex",
                                fontSize: "3.5rem",
                                justifyContent: "center",
                                color: "blue",
                                letterSpacing: "0.3rem",
                            }}
                        >
                            Mecom
                        </Title>
                    </Layout.Content>
                    <Card
                        title={
                            <Space
                                style={{
                                    width: "100%",
                                    fontSize: 18,
                                    justifyContent: "center",
                                }}
                            >
                                <LockFilled /> Sign in
                            </Space>
                        }
                        bordered={false}
                        style={{
                            width: 300,
                            margin: "2.5rem",
                        }}
                    >
                        <Form>
                            <Form.Item
                                name="email"
                                hasFeedback
                                rules={[
                                    {
                                        type: "email",
                                        message:
                                            "The input is not valid E-mail!",
                                    },
                                    {
                                        required: true,
                                        message: "Please input your E-mail!",
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Email"
                                    type="email"
                                    prefix={
                                        <MailOutlined className="site-form-item-icon" />
                                    }
                                ></Input>
                            </Form.Item>
                            <Form.Item
                                name="password"
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input your Password!",
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder="Password"
                                    prefix={
                                        <LockFilled className="site-form-item-icon" />
                                    }
                                ></Input.Password>
                            </Form.Item>

                            <Flex justify="space-between">
                                <Form.Item
                                    name="remember"
                                    valuePropName="checked"
                                    initialValue={{ remember: true }}
                                >
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>
                                <a
                                    style={{ paddingTop: "5px" }}
                                    href="#"
                                    id="login-form-forgot"
                                >
                                    Forgot password
                                </a>
                            </Flex>

                            <Form.Item>
                                <Button
                                    style={{ width: "100%" }}
                                    type="primary"
                                    htmlType="submit"
                                    className="login-form-button"
                                >
                                    Log in
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <Paragraph
                                    style={{
                                        display: "inline-block",
                                        padding: "5px",
                                        margin: "0",
                                    }}
                                >
                                    Don't have an account?
                                </Paragraph>
                                <a href="#">Register now!</a>
                            </Form.Item>
                        </Form>
                    </Card>
                </Space>
            </Layout>
        </>
    );
};

export default LoginPage;
