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
    message,
} from "antd";
import { LockFilled, MailOutlined } from "@ant-design/icons";
import { Logo } from "../../components/icons/Logo";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AdminLoginCredentials, IHttpError } from "../../types";
import { loginAdminApi, selfDataAdminApi } from "../../http/api";
const { Title, Paragraph } = Typography;

const loginAdmin = async (credentials: AdminLoginCredentials) => {
    const { data } = await loginAdminApi(credentials);
    return data;
};

const selfDataAdmin = async () => {
    const { data } = await selfDataAdminApi();
    return data;
};

const LoginPage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const key = "updatable";

    // fetching logged user data
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data: selfData, refetch } = useQuery({
        queryKey: ["selfData"],
        queryFn: selfDataAdmin,
        enabled: false,
    });

    // sending request to auth service to login admin
    const { mutate, isPending } = useMutation({
        mutationKey: ["login"],
        mutationFn: loginAdmin,
        onSuccess: async () => {
            refetch();

            messageApi.open({
                key,
                type: "success",
                content: "Login successful",
                duration: 2,
            });
        },
        onError: async (error) => {
            messageApi.open({
                key,
                type: "error",
                content: (error as IHttpError).response.data.errors[0].msg,
                duration: 3,
            });
        },
    });

    const openMessage = () => {
        messageApi.open({
            key,
            type: "loading",
            content: "Loading...",
        });
    };

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
                        <Form
                            onFinish={(values) => {
                                mutate({
                                    email: values.email,
                                    password: values.password,
                                });
                                openMessage();
                            }}
                            initialValues={{ remember: true }}
                        >
                            {contextHolder}
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
                                    loading={isPending}
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
