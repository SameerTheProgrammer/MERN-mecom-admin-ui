import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllSellers } from "../../http/apiFunction";
import { Button, Space, Table, TableProps } from "antd";
import { ISeller } from "../../types";
import SellerTableColumns from "./SellerTableColumn";
import { CURRENT_PAGE, PER_PAGE } from "../../constants";

type OnChange = NonNullable<TableProps<ISeller>["onChange"]>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

const SellerTable: React.FC = () => {
    const [filteredInfo, setFilteredInfo] = useState<Filters>({});
    const [sortedInfo, setSortedInfo] = useState<Sorts>({});
    const [queryParams, setQueryParams] = useState({
        perPage: PER_PAGE,
        currentPage: CURRENT_PAGE,
    });

    const handleChange: OnChange = (_pagination, filters, sorter) => {
        setFilteredInfo(filters);
        setSortedInfo(sorter as Sorts);
    };

    const clearFilters = () => {
        setFilteredInfo({});
    };

    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };

    const {
        data: allSellers,
        isError,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["allSellers", queryParams],
        queryFn: () => {
            const queryString = new URLSearchParams(
                queryParams as unknown as Record<string, string>,
            ).toString();
            return getAllSellers(queryString);
        },
        placeholderData: keepPreviousData,
    });

    return (
        <>
            <Space style={{ margin: "16px 0 0 0" }}>
                <Button onClick={clearFilters}>Clear filters</Button>
                <Button onClick={clearAll}>Clear filters and sorters</Button>
            </Space>
            <div style={{ marginTop: "24px" }}>
                {isError && <div>{error.message}</div>}
                <Table
                    columns={SellerTableColumns({ filteredInfo, sortedInfo })}
                    dataSource={allSellers?.data}
                    size="small"
                    scroll={{ x: 1500 }}
                    virtual
                    rowKey={"id"}
                    loading={isLoading}
                    onChange={handleChange}
                    pagination={{
                        total: allSellers?.total,
                        pageSize: queryParams.perPage || PER_PAGE,
                        current: queryParams.currentPage || CURRENT_PAGE,
                        onChange: (page, pageSize) => {
                            setQueryParams((prev) => {
                                return {
                                    ...prev,
                                    perPage: pageSize,
                                    currentPage: page,
                                };
                            });
                        },
                    }}
                />
            </div>
        </>
    );
};

export default SellerTable;
