import { extendTheme } from "@chakra-ui/react";
import { buildLegacyTheme } from "sanity";

export const colors={
    brand:{
        primary:'#F1EAE5',
        primaryDark:'#562204',
        primaryMedium:'#E5D3C6',
        dark:"#CEA988"
    },
};

export const theme=extendTheme({colors});

const props={
    '--brand-primary':colors.brand.primary,
    '--brand-primary-dark':colors.brand.primaryDark,
    '--brand-primary-medium':colors.brand.primaryMedium,

}
export const customTheme = extendTheme({
    breakpoints: {
      sm: '500px', // Small screens
      md: '767px', // Medium screens
      lg: '990px', // Large screens
      xl: '1350px', // Extra-large screens
    },
  });
  
 

// export const msTheme=buildLegacyTheme({
// '--focus-color':props['--brand-primary-dark'],
// '--brand-primary':props['--brand-primary'],
// '--component-text-color':props['--brand-primary-dark'],
// '--default-button-color':props['--brand-primary']
// })