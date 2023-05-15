import { Box, Flex, Text, Button, Image, Avatar } from "@chakra-ui/react";

interface NavbarProps {
    currentUsername: string;
    handleSubmit: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentUsername, handleSubmit }) => {
    return (
        <Flex align="center" bg="whitesmoke" p={4}>
            {/* <Text fontSize="xl" fontWeight="bold" mr={4}>
        Chat
      </Text> */}
            <Box className="user" mr={4}>
                <Avatar size="md" src="https://bit.ly/dan-abramov" />
            </Box>
            <Text fontSize="xl" fontWeight="bold" mr={4}>{currentUsername}</Text>
            <Button
                ml="auto"
                colorScheme="blue"
                onClick={handleSubmit}
                size="sm"
                variant="outline"
            >
                Cerrar sesión
            </Button>
        </Flex>
    );
};

export default Navbar;