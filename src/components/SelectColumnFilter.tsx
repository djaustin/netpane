import { Select } from "@chakra-ui/react"
import React from "react"
import { Row } from "react-table"

type SelectColumnFilterProps = {
    column: {
        preFilteredRows: Row[],
        id: number,
        filterValue: string,
        setFilter (filerValue: string): void
    }
}

const SelectColumnFilter: React.FC<SelectColumnFilterProps> = ({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) => {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo<string[]>(() => {
      const options = new Set<string>()
      preFilteredRows.forEach(row => {
        options.add(row.values[id])
      })
      return [...options]
    }, [id, preFilteredRows])
  
    return (
      <Select
        size='xs'
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </Select>
    )
  }

  export default SelectColumnFilter;