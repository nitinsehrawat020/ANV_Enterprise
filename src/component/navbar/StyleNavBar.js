import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { device } from "../../Styles/Theme";

//Logo
export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  left: 20px;
`;
export const Img = styled.img`
  height: 4rem;
  width: auto;
  @media ${device.tablet} {
    height: 3rem;
  }
  @media ${device.mobile} {
    height: 3rem;
  }
`;

//NavBars
export const Nav = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: Center;
  align-items: center;
  font-size: var(--font-size-xs);
  z-index: 10;

  @media ${device.tablet} {
    height: 60px;
  }
  @media ${device.mobile} {
    height: 60px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;

  height: auto;
  z-index: 1;
  width: 100%;
  padding: 0 var(--padding-s);
  max-width: 1200px;
  gap: 23px;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 40%);
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--color-white-500);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(Link)`
  display: flex;
  color: #fff;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  &:active {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    margin-right: 3rem;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  ${(props) =>
    props.type === "quote" &&
    css`
      display: flex;
      padding: 10px 16px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      border: 1px solid #000;
      background: #e7c067;

      @media ${device.tablet} {
        padding: 6px 12px;
      }
    `}
  ${(props) =>
    props.type === "signup" &&
    css`
      display: flex;
      padding: 10px 16px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      border: 1px solid #fff;
      margin-left: 30px;
      color: #fff;

      @media ${device.tablet} {
        padding: 6px 12px;
      }

      @media ${device.tablet} {
        margin-right: 0.2rem;
      }

      &:hover {
        background-color: rgb(44, 44, 44);
      }
    `}
  ${(props) =>
    props.type === "login" &&
    css`
      display: flex;
      padding: 10px 16px;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      border: 1px solid rgb(0, 0, 0);
      margin-left: 15px;
      background-color: #fff;
      color: #000;

      @media ${device.tablet} {
        padding: 6px 12px;
      }

      &:hover {
        background-color: rgb(44, 44, 44);
        color: #fff;
        border: 1px solid #fff;
      }

      @media ${device.tablet} {
      }
    `}
`;
