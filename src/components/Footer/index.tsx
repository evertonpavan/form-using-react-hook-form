import { DrawerBugReport } from "../DrawerBugReport";
import { Flex, Button, Spacer, useDisclosure } from "@chakra-ui/react";


export function Footer() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Flex
                marginTop={'10rem'}
                position={'relative'}
            >   
                <Spacer />
                <Button colorScheme='blue' onClick={onOpen}>
                        Report a bug
                </Button>
            </Flex>

            <DrawerBugReport
                isOpen={isOpen}
                onClose={onClose}
            />
        </>
    )
}