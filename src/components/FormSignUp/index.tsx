import { useForm, Controller } from 'react-hook-form'
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
    Select,
    Switch,
    Checkbox,
    Link,
    Center
} from '@chakra-ui/react'

import { VStack } from '@chakra-ui/react'

import { ViewIcon, ViewOffIcon, ChevronDownIcon } from '@chakra-ui/icons'
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { useState } from 'react';
// import { useRef, useState } from 'react';


interface IData {
    name: string;
    email: string;
    phone: string;
    password: string;
    occupation: string;
    sendEmailAlerts: boolean;
}

export function FormSignUp() {

    const [data, setData] = useState<IData | undefined>();

    const [showPassword, setShowPassword] = useState(false);
    const handlePasswordVisibility = () => setShowPassword(!showPassword);

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        control,
    } = useForm();

    const toast = useToast();

    const onSubmit = handleSubmit(async (value) => {
        const result = new Promise((resolve, reject) => {
            setTimeout(() => {
                const item = {
                    name: value.name,
                    email: value.email,
                    phone: value.phone,
                    password: value.password,
                    occupation: value.occupation,
                    sendEmailAlerts: value.sendEmailAlerts,
                    isAgreeTermsAndConditions: value.isAgreeTermsAndConditions,
                };

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

    console.log('Sign Up:', data);


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
                        <FormControl isInvalid={errors.name}>
                            <FormLabel htmlFor='name'>Name</FormLabel>
                            <Input
                                id='name'
                                placeholder='Full Name'
                                {...register('name', {
                                    required: 'Name is required',
                                    minLength: { value: 4, message: 'Minimum length should be 4' },
                                })}
                            />

                            {errors.name ? (
                                <FormErrorMessage>
                                    {errors.name.message}
                                </FormErrorMessage>
                            ) : (
                                <FormHelperText>
                                    Type your full name
                                </FormHelperText>
                            )}
                        </FormControl>

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

                        <FormControl isInvalid={errors.phone}>
                            <FormLabel htmlFor='phone'>Phone</FormLabel>
                            <Controller
                                name="phone"
                                control={control}
                                rules={{
                                    required: 'Phone is required',
                                    validate: (value) => isValidPhoneNumber(String(value)),
                                    minLength: { value: 10, message: 'Minimum length should be 10' },
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <PhoneInput
                                        value={value}
                                        onChange={onChange}
                                        defaultCountry="BR"  // get default by browser
                                        placeholder="Enter phone number"
                                        limitMaxLength={true}
                                        countryCallingCodeEditable={false}
                                    />
                                )}
                            />

                            {errors.phone ? (
                                <FormErrorMessage>
                                    {errors.phone.message}
                                </FormErrorMessage>
                            ) : (
                                <FormHelperText>
                                    Do not forget to select your country code.
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl isInvalid={errors.occupation}>
                            <FormLabel htmlFor='occupation'>Occupation</FormLabel>
                            <Select
                                id='occupation'
                                placeholder='Select option'
                                icon={<ChevronDownIcon />}
                                {...register('occupation', {
                                    required: 'Occupation is required',
                                })}
                            >
                                <option value='option1'>Front End Developer</option>
                                <option value='option2'>Back End Developer</option>
                                <option value='option3'>Full Stack Developer</option>

                            </Select>

                            {errors.occupation ? (
                                <FormErrorMessage>
                                    {errors.occupation.message}
                                </FormErrorMessage>
                            ) : (
                                <FormHelperText>
                                    Do not forget to select your job occupation.
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

                        <FormControl display='flex' alignItems='center' isInvalid={errors.sendEmailAlerts}>
                            <FormLabel htmlFor='sendEmailAlerts' mb='0'>
                                Enable email alerts?
                            </FormLabel>
                            <Switch
                                id='sendEmailAlerts'
                                {...register('sendEmailAlerts')}
                            />
                            <FormErrorMessage>
                                {errors.sendEmailAlerts && errors.sendEmailAlerts.message}
                            </FormErrorMessage>
                            <FormHelperText>
                                You can change that option later.
                            </FormHelperText>
                        </FormControl>

                        <FormControl isInvalid={errors.isAgreeTermsAndConditions}>
                            <Checkbox
                                id='isAgreeTermsAndConditions'
                                {...register('isAgreeTermsAndConditions')}
                            >
                                I agree to the terms e conditions.
                            </Checkbox>
                            <FormErrorMessage>
                                {errors.isAgreeTermsAndConditions && errors.isAgreeTermsAndConditions.message}
                            </FormErrorMessage>
                            <FormHelperText>
                                {/* Abril modal */}
                                <Link href='#'>Read the terms and conditions here</Link>
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