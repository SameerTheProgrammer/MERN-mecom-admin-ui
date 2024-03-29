import { Button, Form, Table } from "antd";
import Filter from "./../components/UsersPage/Filter";
import { useMemo, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import NewSellerFormDrawer from "../components/UsersPage/NewSellerFormDrawer";
import { FieldData, TQueryParams } from "../types";
import { getAllCustomers, getAllSellers } from "../http/apiFunction";
import { CURRENT_PAGE, PER_PAGE } from "../constants";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import SellerTableColumns from "../components/UsersPage/SellerTableColumn";
import CustomerTableColumns from "../components/UsersPage/CustomerTableColumn";
import { debounce } from "lodash";

const UsersPage = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [filterForm] = Form.useForm();
    const [queryParams, setQueryParams] = useState<TQueryParams>({
        perPage: PER_PAGE,
        currentPage: CURRENT_PAGE,
        q: "",
        role: "customer",
        status: "all",
    });

    const {
        data: users,
        isError,
        error,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["users", queryParams],
        queryFn: () => {
            const filteredParams = Object.entries(queryParams).filter(
                (item) => !!item[1],
            );

            const queryString = new URLSearchParams(
                filteredParams as unknown as Record<string, string>,
            ).toString();

            if (queryParams.role === "seller") {
                return getAllSellers(queryString);
            }
            return getAllCustomers(queryString);
        },
        placeholderData: keepPreviousData,
    });

    const debounceQUpdate = useMemo(() => {
        return debounce((value: string | undefined) => {
            setQueryParams((prev) => ({ ...prev, q: value, currentPage: 1 }));
        }, 500);
    }, []);

    const onFilterChange = (changedFields: FieldData[]) => {
        const changeFilterFields = changedFields
            .map((item) => {
                return { [item.name[0]]: item.value };
            })
            .reduce((acc, item) => {
                return { ...acc, ...item };
            });

        if ("q" in changeFilterFields) {
            debounceQUpdate(changeFilterFields.q);
        } else {
            setQueryParams((prev) => ({
                ...prev,
                ...changeFilterFields,
                currentPage: 1,
            }));
        }
    };

    return (
        <>
            <Form form={filterForm} onFieldsChange={onFilterChange}>
                <Filter>
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        onClick={() => setDrawerOpen(true)}
                    >
                        Add Seller
                    </Button>
                </Filter>
            </Form>

            <div style={{ marginTop: "24px" }}>
                {isError && <div>{error.message}</div>}
                {queryParams.role === "customer" ? (
                    <Table
                        columns={CustomerTableColumns()}
                        dataSource={users?.data}
                        size="small"
                        rowKey="id"
                        loading={isLoading}
                        pagination={{
                            total: users?.total,
                            pageSize: queryParams.perPage,
                            current: queryParams.currentPage,
                            onChange: (page, pageSize) => {
                                setQueryParams((prev) => {
                                    return {
                                        ...prev,
                                        perPage: pageSize || PER_PAGE,
                                        currentPage: page || CURRENT_PAGE,
                                    };
                                });
                            },
                            showTotal: (total: number, range: number[]) => {
                                return `Showing ${range[0]}-${range[1]} of ${total} items`;
                            },
                        }}
                    />
                ) : (
                    <Table
                        columns={SellerTableColumns()}
                        dataSource={users?.data}
                        size="small"
                        rowKey="id"
                        loading={isLoading}
                        pagination={{
                            total: users?.total,
                            pageSize: queryParams.perPage,
                            current: queryParams.currentPage,
                            onChange: (page, pageSize) => {
                                setQueryParams((prev) => {
                                    return {
                                        ...prev,
                                        perPage: pageSize || PER_PAGE,
                                        currentPage: page || CURRENT_PAGE,
                                    };
                                });
                            },
                            showTotal: (total: number, range: number[]) => {
                                return `Showing ${range[0]}-${range[1]} of ${total} items`;
                            },
                        }}
                        scroll={{ x: true }}
                    />
                )}
            </div>

            <NewSellerFormDrawer
                drawerOpen={drawerOpen}
                setDrawerOpen={setDrawerOpen}
                refetch={refetch}
            />
        </>
    );
};

export default UsersPage;
