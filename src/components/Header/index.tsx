import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom';

export function Header() {
    return (
        <>

            <Flex>
                <Box p='2'>
                    <Heading size='md'>Forms Examples</Heading>
                </Box>
                <Spacer />
                <Box>
                    <Link to="/signup">
                        <Button colorScheme='teal' mr='4'>
                            Sign Up
                        </Button>
                    </Link>
                    <Link to="/login">
                        <Button colorScheme='teal'>Log in</Button>
                    </Link>
                </Box>
            </Flex>
        </>
    )
}