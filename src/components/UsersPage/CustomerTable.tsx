import React, { useState } from "react";
import { Button, Space, Table, TableProps } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getAllCustomers } from "../../http/apiFunction";
import { ICustomer } from "../../types";
import CustomerTableColumns from "./CustomerTableColumn";

type OnChange = NonNullable<TableProps<ICustomer>["onChange"]>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

const CustomerTable: React.FC = () => {
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
        data: allCustomers,
        isError,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["allCustomers"],
        queryFn: getAllCustomers,
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
                    columns={CustomerTableColumns({ filteredInfo, sortedInfo })}
                    dataSource={allCustomers}
                    onChange={handleChange}
                    size="small"
                    rowKey="id"
                    loading={isLoading}
                />
            </div>
        </>
    );
};

export default CustomerTable;
