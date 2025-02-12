import styled, { css } from "styled-components";
import { device } from "../Styles/Theme";

export const Button = styled.div`
  ${(props) =>
    props.variant === "filled" &&
    css`
      border-radius: var(--br-m);
      background-color: ${props.color ? props.color : "var(--color-primary)"};
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: var(--padding-xs-1) var(--padding-xs-1);
      cursor: pointer;
      font-size: ${props.size ? `${props.size}rem` : "1rem"};

      @media ${device.laptop} {
        font-size: ${props.size ? `${props.size / 1.5}rem` : "2rem"};
      }
      @media ${device.mobile} {
        font-size: ${props.size ? `${props.size / 2}rem` : "2rem"};
      }
    `}
  ${(props) =>
    props.variant === "outlined" &&
    css`
      border-radius: var(--br-m);
      border: 2px solid var(--color-primary);
      overflow: hidden;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: var(--padding-xs-1) var(--padding-xs-1);
      color: var(--color-primary);
      cursor: pointer;
    `}
`;
