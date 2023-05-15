import { Avatar, AvatarBadge, Flex, Text,  } from "@chakra-ui/react";
import { useState } from "react";

const MessageHeader = () => {
  const [isOnline, setIsOnline] = useState(true); // Cambia el estado según la conexión del usuario

    return (
      <Flex w="100%" h="20%">
        <Avatar size="lg" name="Dan Abrahmov" src="https://bit.ly/dan-abramov">
          <AvatarBadge boxSize="1.25em" bg={isOnline ? "green.500" : "red.500"} />
        </Avatar>
        <Flex flexDirection="column" mx="5" justify="center">
          <Text fontSize="lg" fontWeight="bold">
            Ferin Patel
          </Text>
          <Text color={isOnline ? "green.500" : "red.500"}>
          {isOnline ? "Online" : "Offline"}
          </Text>
        </Flex>
      </Flex>
    );
  };

  export default MessageHeader;