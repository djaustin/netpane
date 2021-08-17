import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { DarkModeSwitch } from "./DarkModeSwitch";
import GradientHeading from "./GradientHeading";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { query } = useRouter();
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    query.error ? setShowError(true) : setShowError(false);
  }, [query]);

  const onSubmit: SubmitHandler<Inputs> = ({ username, password }) =>
    signIn("credentials", {
      callbackUrl: (query.callbackUrl as string) || "/",
      username,
      password,
    });
  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)} minW="md">
      <Stack spacing={4} w={"full"} maxW={"md"}>
        <Flex justify="space-between">
          <GradientHeading>Netpane</GradientHeading>
          <DarkModeSwitch />
        </Flex>
        <Heading fontSize={"2xl"}>Sign in to your account</Heading>
        {showError && (
          <Alert status="error">
            <AlertIcon />
            <AlertDescription>
              There was an error signing in with the credentials you provided.
              Please try again.
            </AlertDescription>
            <CloseButton
              onClick={() => setShowError(false)}
              position="absolute"
              right="8px"
              top="8px"
            />
          </Alert>
        )}
        <FormControl isInvalid={!!errors.username}>
          <FormLabel>Username</FormLabel>
          <Input
            {...register("username", {
              required: "Username is required",
            })}
          />
          <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <Box>
          <Button
            type="submit"
            w="full"
            mt="6"
            colorScheme={"blue"}
            variant={"solid"}
          >
            Sign in
          </Button>
        </Box>
      </Stack>
    </chakra.form>
  );
};

export default LoginForm;
