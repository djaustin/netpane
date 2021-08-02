import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import {
  Box,
  BoxProps,
  chakra,
  Stack,
  Table,
  TableProps,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { IPTableItem } from "models/IPTableData";
import React, { FC } from "react";
import {
  Column,
  useFilters,
  useGlobalFilter,
  useSortBy,
  useTable,
} from "react-table";
import DefaultColumnFilter from "./DefaultColumnFilter";
import IPExternalLink from "./IPExternalLink";
import SelectColumnFilter from "./SelectColumnFilter";
import TableGlobalFilter from "./TableGlobalFilter";

export type IPTableProps = {
  addresses: IPTableItem[];
  allowGlobalFilter?: boolean;
  tableProps?: TableProps;
} & BoxProps;

const IPTable: FC<IPTableProps> = ({
  allowGlobalFilter,
  addresses,
  tableProps,
  ...boxProps
}) => {
  const data = React.useMemo(() => addresses, [addresses]);

  const columns = React.useMemo<Column<IPTableItem>[]>(
    () => [
      {
        Header: "VLAN",
        accessor: "vlan",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
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
      {
        Header: "Actions",
        accessor: "url",
        disableFilters: true,
        Cell: IPExternalLink,
      },
    ],
    []
  );

  // Add default text filter
  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    { columns, data, defaultColumn },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  return (
    <Box {...boxProps}>
      {allowGlobalFilter && (
        <TableGlobalFilter
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      )}
      <Box overflowX="scroll">
        <Table mt={4} {...tableProps} {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th key={column.id} {...column.getHeaderProps()}>
                    <Stack
                      direction={{ base: "column", xl: "row" }}
                      align={{ base: "left", xl: "center" }}
                    >
                      <Box {...column.getSortByToggleProps()}>
                        {column.render("Header")}
                        <chakra.span pl={2}>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <TriangleDownIcon aria-label="sorted descending" />
                            ) : (
                              <TriangleUpIcon aria-label="sorted ascending" />
                            )
                          ) : null}
                        </chakra.span>
                      </Box>

                      <Box>{column.canFilter && column.render("Filter")}</Box>
                    </Stack>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Tr key={row.id} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <Td key={cell.value} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default IPTable;
