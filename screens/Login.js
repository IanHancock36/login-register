import React from 'react'
import {
    Colors,StyledContainer,InnerContainer,WelcomeContainer, PageLogo, Avatar,WelcomeImage, PageTitle,SubTitle,StyledTextInput,StyledInputLabel, LeftIcon,RightIcon,StyledButton, ButtonText,MsgBox,Line,StyledFormArea,ExtraView,ExtraText, TextLink,TextLinkContent
} from './../components/styles'
import { View } from 'react-native';
import{ Octicons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
const Login = () => {
    return (
        <StyledContainer >
            <StatusBar style='dark' />
            <InnerContainer>
                <PageLogo resizeMode='cover' source ={require("./../assets/19012019-02.jpg")}/>
                <PageTitle>M</PageTitle>
                <SubTitle>Account Login</SubTitle>
                <Formik></Formik>
            </InnerContainer>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => <StyledFormArea></StyledFormArea>}
            </Formik>
        </StyledContainer>
    )
}
const TextInput = ({label,icon,...props}) => {
    return (
        <View>
            <LeftIcon>
<Octicons name={icon} size ={30}/>
            </LeftIcon>
            
        </View>
    )
}

export default Login

