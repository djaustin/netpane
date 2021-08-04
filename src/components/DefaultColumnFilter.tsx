import { Input } from "@chakra-ui/react";
import pluralize from "pluralize";
import React from "react";

const DefaultColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter },
}) => {
  const count = preFilteredRows.length;

  return (
    <Input
      size="xs"
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${pluralize("record", count, true)}...`}
    />
  );
};

export default DefaultColumnFilter;
