import React from 'react'
import {
    StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle, StyledFormArea
} from './../components/styles'
import {View} from 'react-native';
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
            
        </View>
    )
}

export default Login

