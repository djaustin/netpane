import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftAddon,
  InputProps,
  StackProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FiArrowRight, FiSearch } from "react-icons/fi";

type SearchInputProps = {
  hasButton?: boolean;
  inputProps?: InputProps;
  inputGroupProps?: InputGroupProps;
} & StackProps;

const SearchInput: React.FC<SearchInputProps> = ({
  hasButton,
  inputProps,
  inputGroupProps,
  ...stackProps
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();
  const backgroundColor = useColorModeValue("gray.200", "gray.800");
  const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    if (event.key === "Enter") searchIfValue();
  };
  const searchIfValue = () => {
    if (searchTerm) router.push(`/search?query=${searchTerm}`);
  };
  return (
    <HStack align="baseline" {...stackProps}>
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
  );
};

export default SearchInput;
