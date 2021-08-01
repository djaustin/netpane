import {
  InputGroup,
  InputLeftAddon,
  useColorModeValue,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { Row, useAsyncDebounce } from "react-table";

export type TableGlobalFilterProps = {
  globalFilter: string;
  setGlobalFilter: (filterValue: string) => void;
};

const TableGlobalFilter: React.FC<TableGlobalFilterProps> = ({
  globalFilter,
  setGlobalFilter,
}) => {
  return (
    <InputGroup>
      <InputLeftAddon bg={useColorModeValue("gray.200", "gray.700")}>
        <FiSearch />
      </InputLeftAddon>
      <Input
        value={globalFilter || ''}
        onChange={(e) => {
            setGlobalFilter(e.target.value || undefined)
        }}
        bg={useColorModeValue("gray.200", "gray.700")}
        placeholder='"192.168.1.39", "mysql-db01.qa.example.corp", "App Server"'
      />
    </InputGroup>
  );
};

export default TableGlobalFilter;