import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
/* fonts */
--font-roboto: Roboto;
--text-lg-medium: Poppins;
/* font sizes */
--font-size-7xl: 1.625rem;
--text-lg-medium-size: 1.125rem;
--font-size-7xs-8: 0.363rem;
--font-size-6xs-7: 0.419rem;
--font-size-smi-5: 0.781rem;
--font-size-4xs-3: 0.519rem;
--text-xs-medium-size: 0.75rem;
/* Colors */
--color-rosybrown-100: #a67d7d;
--color-gray: #1c1c1c;
--color-steelblue: #6c9eca;
--white: #fff;
--color-darkslategray-100: #3a3b3c;
--color-darkslategray-200: #363732;
--primary-050: #f0fdf4;
--gray-5001: #667085;
--gray-500: #556987;
--gray-200: #d5dae1;
--gray-400: #8896ab;
--primary-100: #dcfce7;
--primary-900: #14532d;
/* Gaps */
--gap-3xs: 0.625rem;
--gap-10xs-5: 0.156rem;
--gap-9xs-3: 0.206rem;
--gap-5xs: 0.5rem;
/* Paddings */
--padding-4xl: 1.437rem;
--padding-6xs: 0.437rem;
--padding-3xl: 1.375rem;
--padding-5xl: 1.5rem;
--padding-5xs: 0.5rem;
--padding-8xs-2: 0.262rem;
--padding-7xs-8: 0.362rem;
--padding-7xs: 0.375rem;
/* Border radiuses */
--br-8xs: 5px;
--br-10xs-5: 2.5px;
--br-9xs-3: 3.3px;


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
