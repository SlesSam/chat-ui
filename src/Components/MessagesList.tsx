import { Avatar, Box, Flex } from "@chakra-ui/react";




const MessageList = ({ messages }: any) => {
    return (
      <Flex
        w="100%"
        maxH="70vh"
        direction="column"
        overflowY="scroll"
        bg="beige"
        borderRadius="lg"
        p={4}
        boxShadow="md"
      >
        {messages.map((message: any, index: any) => (
          <Flex
            key={index}
            direction={message.author === "Me" ? "row-reverse" : "row"}
            alignItems="center"
            mt={2}
          >
            {/* es el avatar */}
            <Avatar name={message.author} size="sm" />
            <Box
              bg={message.author === "Me" ? "blue.500" : "gray.200"}
              borderRadius="lg"
              px={4}
              py={2}
              ml={message.author === "Me" ? 0 : 2}
              mr={message.author === "Me" ? 2 : 0}
              color={message.author === "Me" ? "white" : "black"}
              alignSelf="flex-start"
            >
              {message.message}
            </Box>
          </Flex>
        ))}
      </Flex>
    );
  };

export default MessageList;