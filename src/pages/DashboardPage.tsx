import {
    Button,
    Card,
    Col,
    List,
    Row,
    Skeleton,
    Space,
    Statistic,
    Tag,
    Typography,
} from "antd";
import { adminAuthStore } from "../store";
const { Title, Text } = Typography;
import Icon from "@ant-design/icons";
import { ComponentType } from "react";
import { BarChartIcon } from "../components/icons/BarChart";
import BasketIcon from "../components/icons/BasketIcon";
import { Link } from "react-router-dom";

const list = [
    {
        OrderSummary: "Peperoni, Margarita ...",
        address: "Bandra, Mumbai",
        amount: 1200,
        status: "preparing",
        loading: false,
    },
    {
        OrderSummary: "Paneer, Chicken BBQ ...",
        address: "Balurghat, West bengal",
        amount: 2000,
        status: "on the way",
        loading: false,
    },
    {
        OrderSummary: "Paneer, Chicken BBQ ...",
        address: "Balurghat, West bengal",
        amount: 2000,
        status: "on the way",
        loading: false,
    },
    {
        OrderSummary: "Paneer, Chicken BBQ ...",
        address: "Balurghat, West bengal",
        amount: 2000,
        status: "on the way",
        loading: false,
    },
    {
        OrderSummary: "Paneer, Chicken BBQ ...",
        address: "Balurghat, West bengal",
        amount: 2000,
        status: "on the way",
        loading: false,
    },
    {
        OrderSummary: "Paneer, Chicken BBQ ...",
        address: "Balurghat, West bengal",
        amount: 2000,
        status: "on the way",
        loading: false,
    },
    {
        OrderSummary: "Paneer, Chicken BBQ ...",
        address: "Balurghat, West bengal",
        amount: 2000,
        status: "on the way",
        loading: false,
    },
    {
        OrderSummary: "Paneer, Chicken BBQ ...",
        address: "Balurghat, West bengal",
        amount: 2000,
        status: "on the way",
        loading: false,
    },
    {
        OrderSummary: "Paneer, Chicken BBQ ...",
        address: "Balurghat, West bengal",
        amount: 2000,
        status: "on the way",
        loading: false,
    },
];

interface CardTitleProps {
    title: string;
    PrefixIcon: ComponentType<unknown>;
}

const CardTitle = ({ title, PrefixIcon }: CardTitleProps) => {
    return (
        <Space>
            <Icon component={PrefixIcon} />
            {title}
        </Space>
    );
};

function DashboardPage() {
    const time = new Date().getHours();
    const { admin } = adminAuthStore();
    return (
        <>
            <div>
                <Title level={5}>
                    {time > 0 && time < 12
                        ? "Good Morning, "
                        : "Good Evening, "}
                    <br />
                    {admin?.firstName} 😃
                </Title>
                <Row className="mt-4" gutter={16}>
                    <Col span={12}>
                        <Row gutter={[16, 16]}>
                            <Col span={12}>
                                <Card bordered={false}>
                                    <Statistic
                                        title="Total orders"
                                        value={52}
                                    />
                                </Card>
                            </Col>
                            <Col span={12}>
                                <Card bordered={false}>
                                    <Statistic
                                        title="Total sale"
                                        value={70000}
                                        precision={2}
                                        prefix="₹"
                                    />
                                </Card>
                            </Col>
                            <Col span={24}>
                                <Card
                                    title={
                                        <CardTitle
                                            title="Sales"
                                            PrefixIcon={BarChartIcon}
                                        />
                                    }
                                    bordered={false}
                                ></Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Card
                            bordered={false}
                            title={
                                <CardTitle
                                    title="Recent orders"
                                    PrefixIcon={BasketIcon}
                                />
                            }
                        >
                            <List
                                className="demo-loadmore-list"
                                loading={false}
                                itemLayout="horizontal"
                                loadMore={true}
                                dataSource={list}
                                renderItem={(item) => (
                                    <List.Item>
                                        <Skeleton
                                            avatar
                                            title={false}
                                            loading={item.loading}
                                            active
                                        >
                                            <List.Item.Meta
                                                title={
                                                    <a href="https://ant.design">
                                                        {item.OrderSummary}
                                                    </a>
                                                }
                                                description={item.address}
                                            />
                                            <Row
                                                style={{ flex: 1 }}
                                                justify="space-between"
                                            >
                                                <Col>
                                                    <Text strong>
                                                        ₹{item.amount}
                                                    </Text>
                                                </Col>
                                                <Col>
                                                    <Tag color="volcano">
                                                        {item.status}
                                                    </Tag>
                                                </Col>
                                            </Row>
                                        </Skeleton>
                                    </List.Item>
                                )}
                            />
                            <div style={{ marginTop: 20 }}>
                                <Button type="link">
                                    <Link to="/orders">See all orders</Link>
                                </Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default DashboardPage;
