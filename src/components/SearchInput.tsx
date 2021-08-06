import {
  Button,
  Checkbox,
  CheckboxGroup,
  HStack,
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftAddon,
  InputProps,
  StackProps,
  useCheckboxGroup,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FiArrowRight, FiSearch } from "react-icons/fi";

type SearchInputProps = {
  hasButton?: boolean;
  inputProps?: InputProps;
  inputGroupProps?: InputGroupProps;
  defaultCheckboxValue?: string[];
} & StackProps;

const SearchInput: React.FC<SearchInputProps> = ({
  hasButton,
  inputProps,
  inputGroupProps,
  defaultCheckboxValue,
  ...stackProps
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();
  const backgroundColor = useColorModeValue("gray.200", "gray.800");
  const checkboxGroup = useCheckboxGroup({
    defaultValue: defaultCheckboxValue || ["ip-address", "site", "vlan"],
  });

  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") searchIfValue();
  };

  const searchIfValue = () => {
    if (searchTerm && checkboxGroup.value)
      router.push(
        `/search?query=${searchTerm}&scope=${checkboxGroup.value.join(",")}`
      );
  };

  return (
    <VStack {...stackProps}>
      <HStack align="baseline" w="full">
        <InputGroup variant="filled" {...inputGroupProps}>
          <InputLeftAddon bg={backgroundColor}>
            <FiSearch />
          </InputLeftAddon>
          <Input
            bg={backgroundColor}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={onKeyPress}
            placeholder='"192.168.1.39", "mysql-db01.qa.example.corp", "App Server"'
            _focus={{}}
            {...inputProps}
          />
        </InputGroup>
        {hasButton && (
          <Button onClick={searchIfValue}>
            <FiArrowRight />
          </Button>
        )}
      </HStack>
      <CheckboxGroup
        value={checkboxGroup.value}
        onChange={checkboxGroup.setValue}
      >
        <HStack spacing="8">
          <Checkbox value="ip-address">IP Addresses</Checkbox>
          <Checkbox value="site">Sites</Checkbox>
          <Checkbox value="vlan">VLANs</Checkbox>
        </HStack>
      </CheckboxGroup>
    </VStack>
  );
};

export default SearchInput;
