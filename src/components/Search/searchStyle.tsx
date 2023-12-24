import { BoxProps, InputProps } from "@chakra-ui/react";

export const searchInputStyles:InputProps={
    type:'text' ,
    placeholder:'Search...',
    focusBorderColor:'brand.primaryDark',
    borderWidth:"1px",
    borderColor:"brand.primaryDark",
   color:"brand.primaryDark",
   _placeholder:{ opacity: 0.4,color: 'inherit'}

}
export const wrappercontainerStyle:BoxProps={
    position:'relative',
    w:{base:'100%',lg:'12rem'}

}
export const dropdownStyle:BoxProps={
    position:'absolute',
    bg:'brand.primary',
    color:"brand.primaryDark",
    fontFamily:"Playfair Display",
    fontSize:'13px',
    marginTop:'2px',
    zIndex:'1',
    shadow:'md',
    padding:'0.5rem',
    w:'100%',
    maxH:'500px',
    overflowY:'auto',
    boxSizing:'border-box'
}