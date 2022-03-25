import { useForm } from 'react-hook-form'
import {
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    FormControl,
    Input,
    InputGroup,
    Button,
    useToast,
    CircularProgress,
    InputRightElement,
    Center
} from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useState } from 'react';

interface IData {
    email: string;
    password: string;
}

export function FormLogin() {

    const [data, setData] = useState<IData | undefined>();

    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordVisibility = () => setShowPassword(!showPassword);

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();

    const toast = useToast();

    const onSubmit = handleSubmit(async (value) => {
        const result = new Promise((resolve, reject) => {
            setTimeout(() => {
                const item = {
                    email: value.email,
                    password: value.password,
                };

                console.log('item', item);
                setData(item);
                resolve(true);
            }, 1500);
        });

        if (await result) {
            toast({
                title: "Submitted!",
                description: "Account created.",
                status: "success",
                duration: 3000,
                isClosable: true
            });
        };
    });

    console.log('Login data: ', data);

    return (
        <>
            <Center
                marginTop={'4rem'}
            >
                <form onSubmit={onSubmit}>
                    <VStack
                        w="24rem"
                        spacing={6}
                        align='center'
                    >
                        <FormControl isInvalid={errors.email}>
                            <FormLabel htmlFor='email'>E-mail</FormLabel>
                            <Input
                                id='email'
                                placeholder='test@test.com'
                                {...register('email', {
                                    required: 'E-mail is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: "Invalid email address"
                                    }
                                })}
                            />

                            {errors.email ? (
                                <FormErrorMessage>
                                    {errors.email.message}
                                </FormErrorMessage>
                            ) : (
                                <FormHelperText>
                                    This e-mail will be your login username
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl isInvalid={errors.password}>
                            <FormLabel htmlFor='password'>Passowrd</FormLabel>
                            <InputGroup>
                                <Input
                                    id='password'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="*******"
                                    {...register('password', {
                                        required: 'Password is required',
                                        pattern: {
                                            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                                            message: "Invalid password"
                                        }
                                    })}
                                />
                                <InputRightElement width="3rem">
                                    <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>
                                {errors.password && errors.password.message}
                            </FormErrorMessage>
                            <FormHelperText>
                                The password must be:
                                at least one upper case letter,
                                at least one lower case letter,
                                at least one digit,
                                at least one special character
                                and minimum eight in length.
                            </FormHelperText>
                        </FormControl>






                        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                            {isSubmitting ? (
                                <CircularProgress isIndeterminate size="24px" color="teal" />
                            ) : (
                                'Submit'
                            )}
                        </Button>

                    </VStack>
                </form>
            </Center>
        </>
    )
}