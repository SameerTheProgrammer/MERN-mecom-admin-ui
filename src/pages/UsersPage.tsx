import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import UsersTable from "./../components/UsersPage/Table";

const UsersPage = () => {
    return (
        <>
            <Card>
                <Row justify="space-between">
                    <Col span={16}>
                        <Row gutter={20}>
                            <Col
                                span={8}
                                style={{
                                    height: "fit-content",
                                }}
                            >
                                <Form.Item
                                    name="q"
                                    style={{
                                        margin: 0,
                                    }}
                                >
                                    <Input.Search
                                        allowClear={true}
                                        placeholder="Search"
                                    />
                                </Form.Item>
                            </Col>

                            <Col
                                span={8}
                                style={{
                                    height: "fit-content",
                                }}
                            >
                                <Select
                                    style={{ width: "100%" }}
                                    placeholder="Status"
                                    allowClear={true}
                                    // onChange={(selectedItem) =>
                                    //     onFilterChange(
                                    //         "statusFilter",
                                    //         selectedItem,
                                    //     )
                                    // }
                                >
                                    <Select.Option value="ban">
                                        Ban
                                    </Select.Option>
                                    <Select.Option value="active">
                                        Active
                                    </Select.Option>
                                </Select>
                            </Col>
                            <Col span={8}>
                                <Form.Item
                                    name="role"
                                    style={{
                                        margin: 0,
                                    }}
                                >
                                    <Select
                                        style={{ width: "100%" }}
                                        allowClear={true}
                                        placeholder="Select role"
                                    >
                                        <Select.Option value="admin">
                                            Admin
                                        </Select.Option>
                                        <Select.Option value="seller">
                                            Seller
                                        </Select.Option>
                                        <Select.Option value="customer">
                                            Customer
                                        </Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col
                        span={8}
                        style={{
                            display: "flex",
                            justifyContent: "end",
                            height: "max-content",
                        }}
                    >
                        <Button
                            type="primary"
                            icon={<PlusOutlined />}
                            // onClick={() => setDrawerOpen(true)}
                        >
                            Add User
                        </Button>
                    </Col>
                </Row>
            </Card>
            <UsersTable />
        </>
    );
};

export default UsersPage;
