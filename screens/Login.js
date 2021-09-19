import React,{useState} from 'react'
import {
    Colors, StyledContainer, InnerContainer, WelcomeContainer, PageLogo, Avatar, WelcomeImage, PageTitle, SubTitle, StyledTextInput, StyledInputLabel, LeftIcon, RightIcon, StyledButton, ButtonText, MsgBox, Line, StyledFormArea, ExtraView, ExtraText, TextLink, TextLinkContent
} from './../components/styles'
import { View } from 'react-native';
import { Octicons ,Ionicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
const { brand, darkLight } = Colors

const Login = () => {
 const [hidePassword , setHidePassword] =useState =('')
    return (
        <StyledContainer >
            <StatusBar style='dark' />
            <InnerContainer>
                <PageLogo resizeMode='cover' source={require("./../assets/19012019-02.jpg")} />
                <PageTitle>M</PageTitle>
                <SubTitle>Account Login</SubTitle>
                <Formik></Formik>
            </InnerContainer>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => {console.log(values)}}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (<StyledFormArea>
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
                        secureTextEntry ={true}
                        isPassword ={true}
                    />
                </StyledFormArea>)}
            </Formik>
        </StyledContainer>
    )
}
const TextInput = ({ label, icon,isPassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon>
<Ionicons size={30} color={darkLight} />
                </RightIcon>
            )}

        </View>
    )
}

export default Login

