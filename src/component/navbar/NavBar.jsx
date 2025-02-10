import { FaBars } from "react-icons/fa6";
import {
  NavMenu,
  MobileIcon,
  Nav,
  NavContainer,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from ".";
import Logo from "./Logo";

function NavBar() {
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
          <FaBars />
        </MobileIcon>
      </NavContainer>
    </Nav>
  );
}

export default NavBar;
