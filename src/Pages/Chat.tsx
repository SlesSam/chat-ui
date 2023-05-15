import { useState } from "react";
import { Flex, Button, Stack, Divider, Box, } from "@chakra-ui/react";
import Header from "../Components/Header";
import MessageHeader from "../Components/MessageHeader";
import UserList from "../Components/UserList";
import MessageList from "../Components/MessagesList";
import MessageInput from "../Components/MessagesInput";
import Navbar from "../Components/NavBar";


type Message = {
    author: string;
    message: string;
};

const Chats = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    let [users,] = useState(
        "name");

    const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputValue) {
            setMessages([...messages, { author: 'Me', message: inputValue }]);
            setInputValue('');
        }
    };

    const handleReceiveMessage = () => {
        const newMessage: Message = { author: 'Friend', message: 'Hello Me!' };
        setMessages([...messages, newMessage]);
    };

    const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };
    const handleLogout = () => {
        // Lógica para manejar el cierre de sesión
    };

    return (
        <>
            {/* ToDo: mejorar un opoco mas */}
            <Header />



            <Flex h="50%" w="100%" bg="gray.200" justify="center" borderRadius="lg">
               
                <Box w="30%" h="100%" overflowY="auto" >
                    <Navbar currentUsername={users} handleSubmit={handleLogout} />
                    <Divider />
                    <UserList />
                </Box>

                <Stack p={4} w="80%" h="100%" spacing={4}   borderRadius="lg">
                    <MessageHeader />

                    <MessageList messages={messages} />

                    <MessageInput
                        inputValue={inputValue}
                        handleInputValueChange={handleInputValueChange}
                        handleSendMessage={handleSendMessage}
                        keyDown={keyDown}
                      
                    />

                    <Divider />
                    <Button
                        mt={4}
                        colorScheme="green"
                        onClick={handleReceiveMessage}
                        alignSelf="flex-start"
                    >
                        Receive Message
                    </Button>
                </Stack>
            </Flex>
        </>
    );
};

export default Chats;