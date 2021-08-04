import { HStack, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { FiEdit, FiEdit2, FiExternalLink } from "react-icons/fi";
import { Cell } from "react-table";

type AddressActionsCellProps = {
  cell: Cell;
};

const AddressActionsCell: React.FC<AddressActionsCellProps> = ({
  cell: { value },
}) => (
  <HStack spacing={4}>
    <Tooltip hasArrow label="View in Netbox">
      <Link isExternal href={`${value.replace("/api", "")}`}>
        <FiExternalLink />
      </Link>
    </Tooltip>
    <Tooltip hasArrow label="Edit in Netbox">
      <Link isExternal href={`${value.replace("/api", "")}edit`}>
        <FiEdit2 />
      </Link>
    </Tooltip>
  </HStack>
);

export default AddressActionsCell;
