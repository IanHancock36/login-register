import React, { useState } from 'react'
import {
    Colors, StyledContainer, InnerContainer, WelcomeContainer, PageLogo, Avatar, WelcomeImage, PageTitle, SubTitle, StyledTextInput, StyledInputLabel, LeftIcon, RightIcon, StyledButton, ButtonText, MsgBox, Line, StyledFormArea, ExtraView, ExtraText, TextLink, TextLinkContent
} from './../components/styles'
import { View } from 'react-native';
import { Octicons, Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
const { brand, darkLight } = Colors

const Login = () => {
     const [hidePassword , setHidePassword] =useState(true)
    return (
        <StyledContainer >
            <StatusBar style='dark' />
            <InnerContainer>
                <PageLogo resizeMode='cover' source={require("./../assets/19012019-02.jpg")} />
                <PageTitle>M</PageTitle>
                <SubTitle>Account Login</SubTitle>
                </InnerContainer>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => { console.log(values) }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                <StyledFormArea>
                    <TextInput
                        label='Email Address'
                        icon='mail'
                        placeholder='Email Address'
                        placeholderTextColr={darkLight}
                        onChangText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType='email-address'
                    />
                    <TextInput
                        label='Password'
                        icon='lock'
                        placeholder='*********'
                        placeholderTextColr={darkLight}
                        onChangText={handleChange('password')}
                        onBlur={handleBlur('')}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword ={hidePassword}
                        setHidePassword ={setHidePassword}

                    />
                    <StyledButton onPress={handleSubmit}>
                    <ButtonText>Login</ButtonText>
                    </StyledButton>
                </StyledFormArea>)}
            </Formik>
        </StyledContainer>
    )
}
const TextInput = ({ label, icon, isPassword,hidePassword,setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={()=> setHidePassword(!hidePassword)}>
                    <Ionicons name ={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
                </RightIcon>
            )}

        </View>
    )
}

export default Login

