import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import {
  NavMenu,
  MobileIcon,
  Nav,
  NavContainer,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./StyleNavBar";
import Logo from "./Logo";
import Aside from "../aside/Aside";
import { useState } from "react";

function NavBar() {
  const [menuToggle, setMenuToggle] = useState("false");
  function openMenu() {
    setMenuToggle("true");
  }
  function closeMenu() {
    setMenuToggle("false");
  }

  return (
    <Nav>
      <NavContainer>
        <Logo />

        <NavMenu>
          <NavItem>
            <NavLinks to="/"> Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="design"> Design</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="about_us"> About Us</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink type="quote">Get a Quote </NavBtnLink>
          <NavBtnLink type="signup">Sign Up </NavBtnLink>
          <NavBtnLink type="login">Login </NavBtnLink>
        </NavBtn>
        <MobileIcon>
          {menuToggle === "true" ? (
            <ImCross onClick={closeMenu} />
          ) : (
            <FaBars onClick={openMenu} />
          )}
        </MobileIcon>
      </NavContainer>
      <Aside display={menuToggle} />
    </Nav>
  );
}

export default NavBar;
