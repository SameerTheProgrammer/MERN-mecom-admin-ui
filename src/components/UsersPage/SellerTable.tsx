import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllSellers } from "../../http/apiFunction";
import { Button, Space, Table, TableProps } from "antd";
import { ISeller } from "../../types";
import SellerTableColumns from "./SellerTableColumn";

type OnChange = NonNullable<TableProps<ISeller>["onChange"]>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

const SellerTable: React.FC = () => {
    const [filteredInfo, setFilteredInfo] = useState<Filters>({});
    const [sortedInfo, setSortedInfo] = useState<Sorts>({});

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
        queryKey: ["allSellers"],
        queryFn: getAllSellers,
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
                    dataSource={allSellers}
                    size="small"
                    scroll={{ x: 1500, y: 200 }}
                    virtual
                    rowKey={"id"}
                    loading={isLoading}
                    onChange={handleChange}
                />
            </div>
        </>
    );
};

export default SellerTable;
