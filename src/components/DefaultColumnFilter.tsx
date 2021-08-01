import { Input } from "@chakra-ui/react";
import React from "react";


const DefaultColumnFilter = ({
    column: { filterValue, preFilteredRows, setFilter },
  }) => {
    const count = preFilteredRows.length
  
    return (
      <Input
        size='xs'
        value={filterValue || ''}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
        placeholder={`Search ${count} records...`}
      />
    )
  }

export default DefaultColumnFilter;