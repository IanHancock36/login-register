import React from 'react'
import {
    StyledContainer,InnerContainer,PageLogo,PageTitle,SubTitle,StyledFormArea
} from './../components/styles'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik'
const Login = () => {
    return(
        <StyledContainer >
            <StatusBar style ='dark'/>
        <InnerContainer>
            <PageLogo resizeMode='cover'/>
            <PageTitle>M</PageTitle>
            <SubTitle>Account Login</SubTitle>
            <Formik></Formik>
        </InnerContainer>
        
        
        </StyledContainer>

    )
}

export default Login 

// source ={require("https://picsum.photos/200")}