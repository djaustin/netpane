import {
  Input,
  InputGroup,
  InputLeftAddon,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";

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
        aria-label='search all columns'
        value={globalFilter || ""}
        onChange={(e) => {
          setGlobalFilter(e.target.value || undefined);
        }}
        bg={useColorModeValue("gray.200", "gray.700")}
        placeholder='"192.168.1.39", "mysql-db01.qa.example.corp", "App Server"'
      />
    </InputGroup>
  );
};

export default TableGlobalFilter;
