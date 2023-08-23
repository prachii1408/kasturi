import { BoxProps, FlexProps, StackProps } from "@chakra-ui/react";

export const navbarStyles:BoxProps={
  
     w:"100%",
      bgColor:"brand.primary",
      zIndex:10,
     
}
export const desktopNavStyles:FlexProps={
    justify:"space-between",
    align:"center",
    px:"2rem",
    py:'1rem',
    boxShadow:"md",
    fontWeight:"semibold",
    display:{base:"none",md:"none", lg:'flex'}
}
export const logostyles:StackProps={
    direction:"row",
    alignItems:"center"
}
export const liststyles:StackProps={
    direction:"row",
    justify:"center",
    gap:8,
    flex:1,
    alignItems:"center",
    ml:"10rem",
    fontFamily:"Playfair Display",
    textColor:"brand.primaryDark",
}
export const cartstyles:StackProps={
    direction:"row",
    spacing:0,
}

export const mobileNavStyles:FlexProps={
    justify:"space-between",
    align:"center",
    px:"1rem",
    py:'1rem',
    boxShadow:"md",
    display:{base:"flex",md:"flex", lg:'none'},
    fontFamily:"Playfair Display",
    textColor:"brand.primaryDark",
    fontWeight:"semibold",
}
export const mobileCartStyles:StackProps={
    direction:"row",
    spacing:"0",
}
export const mobileSearchWrapper:BoxProps={
    px:"2rem",
    py:"0.5rem",

    display:{base:"block",md:"block", lg:'none'}
}