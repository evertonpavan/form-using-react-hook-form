import { Drawer, UseDisclosureProps as ChakraUseDisclosureProps, Button, DrawerHeader, DrawerBody, Input, DrawerFooter, Select, DrawerContent, DrawerOverlay, DrawerCloseButton } from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons'

interface IDrwaerProps extends ChakraUseDisclosureProps {
    isOpen: boolean;
    onClose: () => void;
}


export function DrawerBugReport({ isOpen, onClose }: IDrwaerProps) {

    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            // finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Report a bug</DrawerHeader>

                    <DrawerBody>

                        <Select
                            id='occupation'
                            placeholder='Select category'
                            icon={<ChevronDownIcon />}
                        >
                            <option value='option1'>Front End Developer</option>
                            <option value='option2'>Back End Developer</option>
                            <option value='option3'>Full Stack Developer</option>

                        </Select>

                        <Input
                            placeholder='Type here...'
                        />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Send</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}