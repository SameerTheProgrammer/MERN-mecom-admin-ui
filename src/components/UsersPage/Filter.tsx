import { Card, Col, Form, Input, Row, Select } from "antd";

interface FilterComponentProps {
    children: React.ReactNode;
}

const Filter: React.FC<FilterComponentProps> = ({ children }) => {
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
                                <Form.Item
                                    name="status"
                                    style={{
                                        margin: 0,
                                    }}
                                >
                                    <Select
                                        style={{ width: "100%" }}
                                        placeholder="Status"
                                        defaultValue={"all"}
                                    >
                                        <Select.Option value="all">
                                            All
                                        </Select.Option>
                                        <Select.Option value="ban">
                                            Ban
                                        </Select.Option>
                                        <Select.Option value="active">
                                            Active
                                        </Select.Option>
                                    </Select>
                                </Form.Item>
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
                                        placeholder="Select role"
                                        defaultValue={"customer"}
                                    >
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
                        {children}
                    </Col>
                </Row>
            </Card>
        </>
    );
};

export default Filter;
