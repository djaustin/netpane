import { HStack, Avatar, IconButton, Text } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/client";
import { FiLogOut } from "react-icons/fi";

const UserDetails = () => {
  const [session, loading] = useSession();
  if (loading) return null;
  return (
    <>
    { (!loading && !session) ?
     
      <HStack justify="space-between">
        <HStack spacing="4">
          <Avatar size="xs" name='Not Applicable' />
          <Text>Not logged in</Text>
        </HStack>
        <IconButton
          aria-label="logout"
          size="xs"
          variant="outline"
          icon={<FiLogOut />}
        />
      </HStack>
    :

    <HStack justify="space-between">
      <HStack spacing="4">
        <Avatar size="xs" name={session?.user?.name} />
        <Text>{session?.user?.name}</Text>
      </HStack>
      <IconButton
        onClick={() => signOut()}
        aria-label="logout"
        size="xs"
        variant="outline"
        icon={<FiLogOut />}
      />
    </HStack>
    }
    </>);
};

export default UserDetails;
