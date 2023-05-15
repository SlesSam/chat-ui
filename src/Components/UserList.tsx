import { Avatar, Box, Flex, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

type User = {
    name: string,
    connected: boolean
}


const UserList = () => {
    let [users,] = useState<User[]>([
        { name: "User 1fsdf", connected: true },
        { name: "User 2sdfsd", connected: false },
        { name: "User 3sdf", connected: true },
        { name: "User 4dfsd", connected: false },
        { name: "User 4dfsd", connected: true },
        { name: "User 4dfsd", connected: true },
    ]);

    return (
        <Flex bg="whitesmoke" borderRadius="lg" p={4} boxShadow="md" direction="column" overflowY="auto">
            <Stack spacing={4} align="flex">
                <Box alignSelf="flex-start">
                    <Text fontSize="xl" fontWeight="bold">
                        LIST USERS
                    </Text>
                    {users.map((user, index) => (
                        <Box
                            key={index}
                            //   onClick={() => handleUserClick(user.id)}
                            cursor="pointer"
                            _hover={{ textDecoration: "underline" }}
                            alignItems="center"
                            display="flex"
                        >
                            <Avatar size="md" src="https://bit.ly/dan-abramov" />
                            <Text p={6} fontSize="sm" fontWeight="bold">
                                {user.name}
                            </Text>
                            <Box
                                bg={user.connected ? "green.500" : "red.500"}
                                borderRadius="full"
                                boxSize={2}
                                mr={1}
                            />
                        </Box>
                    ))}
                </Box>
            </Stack>
        </Flex>

    );
};

export default UserList;