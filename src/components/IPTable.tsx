import { Table, Thead, Tbody, Tr, Th, Td, chakra, TableProps, Input, InputGroup, InputLeftAddon, useColorModeValue, Box, BoxProps } from "@chakra-ui/react"
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { useTable, useSortBy, Column, useGlobalFilter } from "react-table"

import { FC } from "react";
import { IPAddress } from "../models/netboxAPI";
import React from "react";
import { FiSearch } from "react-icons/fi";
import TableGlobalFilter from "./TableGlobalFilter";

export type IPTableProps = {
    addresses: IPAddress[],
    tableProps: TableProps
} & BoxProps


const IPTable: FC<IPTableProps> = ({addresses, tableProps, ...boxProps}) => {
    const data = React.useMemo(
      () => addresses,
      [addresses],
    )
  
    const columns = React.useMemo<Column<IPAddress>[]>(
      () => [
        {
          Header: "Address",
          accessor: "display",
        },
        {
          Header: "DNS Name",
          accessor: "dns_name",
        },
        {
          Header: "Description",
          accessor: "description",
        },
      ],
      [],
    )
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      state,
      setGlobalFilter
    } = useTable({ columns, data }, useGlobalFilter, useSortBy)
  
    return (
    <Box {...boxProps}>
    <TableGlobalFilter globalFilter={state.globalFilter} preGlobalFilteredRows={rows} setGlobalFilter={setGlobalFilter} />
      <Table mt={4} {...tableProps} {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <chakra.span pl="4">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </Td>
                ))}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
      </Box>
    )
}

export default IPTable