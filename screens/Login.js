import React, { useState } from 'react'
import {
    Colors, StyledContainer, InnerContainer, WelcomeContainer, PageLogo, Avatar, WelcomeImage, PageTitle, SubTitle, StyledTextInput, StyledInputLabel, LeftIcon, RightIcon, StyledButton, ButtonText, MsgBox, Line, StyledFormArea, ExtraView, ExtraText, TextLink, TextLinkContent
} from './../components/styles'
import { View } from 'react-native';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
const { brand, darkLight ,primary } = Colors

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
                    <MsgBox></MsgBox>
                    <StyledButton onPress={handleSubmit}>
                    <ButtonText>Login</ButtonText>
                    </StyledButton>
                    <Line/>
                    <StyledButton google={true} onPress={handleSubmit}>
                        <Fontisto  name ="google" color={primary} size ={20}/>
                    <ButtonText google={true}>Google Sign In</ButtonText>
                    </StyledButton>
                    <ExtraView>
                        <ExtraText> Don't have an account already? </ExtraText>
                        <TextLink>Sign Up</TextLink>
                    </ExtraView>
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

