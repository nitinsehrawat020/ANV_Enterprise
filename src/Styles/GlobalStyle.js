import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
/* fonts */
--font-roboto: Roboto;
--text-lg-medium: Poppins;
/* font sizes */
--fontsize-xs: 1rem;
--fontsize-s: 2rem;
--fontsize-n: 4rem;
--fontsize-l: 8rem;
--fontsize-xl: 10rem;
/* Colors */

--color-background-200:#4B4F52;
--color-background-500:#464646;
--color-background-700:#3E3F3C;
--color-background-800:#363732;
--color-white-50: #f0fdf4;
--color-white-500: #fff;
--color-primary: #6c9eca;
--color-secondary:#E7C067;

/* Gaps */

/* Paddings */
--padding-xs-1: 0.5rem;
--padding-xs-0: 1rem;
--padding-s: 2rem;
--padding-ls: 3rem;
--padding-m: 4rem;
--padding-l: 8rem;
--padding-xl: 10rem;

/* Border radiuses */
--br-s: 2.5px;
--br-m: 5px;
--br-l: 10px;
--br-xl: 15px;


}
    body{
        padding: 0;
        margin:0%;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }

    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        
    }
    
`;

export default GlobalStyle;
