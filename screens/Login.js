import React from 'react'
import {
    StyledContainer,InnerContainer,PageLogo,PageTitle
} from './../components/styles'
import { StatusBar } from 'expo-status-bar'
const Login = () => {
    return(
        <StyledContainer>
            <StatusBar style ='dark'/>
        <InnerContainer>
            <PageLogo resizeMode='cover'/>
            <PageTitle>M</PageTitle>
        </InnerContainer>
        
        
        </StyledContainer>

    )
}

export default Login 

// source ={require("https://picsum.photos/200")}