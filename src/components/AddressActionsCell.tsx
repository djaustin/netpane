import { Button, HStack, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { FiEdit2, FiExternalLink } from "react-icons/fi";
import { Cell } from "react-table";

type AddressActionsCellProps = {
  cell: Cell;
};

const AddressActionsCell: React.FC<AddressActionsCellProps> = ({
  cell: { value },
}) => (
  <HStack spacing={0}>
    <Tooltip hasArrow label="View in Netbox">
      <Button aria-label="view in Netbox" variant="link">
        <Link isExternal href={`${value.replace("/api", "")}`}>
          <FiExternalLink />
        </Link>
      </Button>
    </Tooltip>
    <Tooltip hasArrow label="Edit in Netbox">
      <Button aria-label="edit in Netbox" variant="link">
        <Link isExternal href={`${value.replace("/api", "")}edit`}>
          <FiEdit2 />
        </Link>
      </Button>
    </Tooltip>
  </HStack>
);

export default AddressActionsCell;
