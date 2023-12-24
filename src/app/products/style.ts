import { Grid, GridProps } from "@chakra-ui/react";
import styled, { css } from 'styled-components';




export const gridStyles=styled(Grid)`
@media (min-width: 980px) and (max-width: 1300px) {
        grid-template-columns: repeat(3, 1fr); }
`
   
  
