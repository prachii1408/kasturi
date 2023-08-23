import { BoxProps, FlexProps, TextProps } from "@chakra-ui/react";

export const textBoxStyles:BoxProps={
    width:"40vw",
    height:"25vh",
    position:"absolute",
    top:"25vh",
    left:"5rem",
}
export const textBoxMobileStyles:BoxProps={
    width:"50vw",
    height:"30vh",
    position:"absolute",
    top:"12rem",
    left:"2rem",
    
}
export const spanStyles:TextProps={
    fontFamily:'Baskervville',
    fontStyle: 'italic',
    textColor:'#B29C89',
}
export const spanMobileStyles:TextProps={
    fontFamily:'Baskervville',
    fontStyle: 'italic',
    textColor:'#B29C89',
}

export const textStyles:TextProps={
    fontFamily:'Baskervville',
    fontStyle: 'italic',
    fontSize: '70px',
    textColor:'#FFFFFF'
}
export const desktopView:FlexProps={
    display:{base:"none",lg:"block"}
}
export const mobileView:FlexProps={
    display:{base:"block",lg:"none"}
}

export const textMobileStyles:TextProps={
    fontFamily:'Baskervville',
    fontStyle: 'italic',
    fontSize: '30px',
    textColor:'#FFFFFF',
    
}