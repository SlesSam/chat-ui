import { Button, Flex, Input } from "@chakra-ui/react";

const MessageInput = ({
    inputValue,
    handleInputValueChange,
    handleSendMessage,
    keyDown,
}: any) => {
    return (
        <Flex w="100%" bg="white" borderRadius="lg" p={4} boxShadow="md">
            <Input
                value={inputValue}
                onChange={handleInputValueChange}
                onKeyDown={keyDown}
                placeholder="Write your message..."
                variant="filled"
                borderRadius="full"
                mr={4}
                _hover={{
                    bg: "gray.100",
                }}
                _focus={{
                    bg: "gray.100",
                }}
                _placeholder={{
                    color: "gray.500",
                }}
            />
            <Button
                colorScheme="blue"
                borderRadius="full"
                onClick={handleSendMessage}
                _hover={{
                    bg: "blue.400",
                }}
            >
                Send
            </Button>
        </Flex>
    );
};

export default MessageInput;