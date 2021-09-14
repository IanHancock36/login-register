import styled from 'styled-components'
import {View,Text,Image} from 'react-native'
import Constants from 'expo-constants'
// colors 
const StatusBarHeight = Constants.statusBarHeight 
export const Colors = {
    primary: "#fffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight:"#9CA3AF",
    brand:"#6D28D9",
    green: '#10B981',
    red: '#EF4444', 
}
// destructuring the colors. 

const {primary,secondary,tertiary,brand,green,red,darkLight} = Colors
export const StyledContainer = styled.View`
flex: 1;
padding: 25px ;
background-color: ${primary}
padding-top:${StatusBarHeight + 10}px
`
export const InnerContainer = styled.View `
flex: 1;
width: 100%;
align-items: center;
`

export const PageLogo = styled.Image`
width:250px;
height: 200px;
`

export const PageTitle = styled.Text `
font-size: 30px;
text-align: center;
font-weight: bold;
color: ${brand};
padding: 10px;

`