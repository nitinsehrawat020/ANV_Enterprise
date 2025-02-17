import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { IoIosArrowDropdown } from "react-icons/io";
import {
  NavMenu,
  MobileIcon,
  Nav,
  NavContainer,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  Dropdown,
} from "./StyleNavBar";
import Logo from "./Logo";
import Aside from "../aside/Aside";
import { useState } from "react";

function NavBar() {
  const [menuToggle, setMenuToggle] = useState("false");
  const [dropdownToggle, setDropdownToggle] = useState(false);
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

          <NavItem
            onMouseEnter={() => setDropdownToggle(true)}
            onMouseLeave={() => setDropdownToggle(false)}
            onClick={() => setDropdownToggle(!dropdownToggle)}
          >
            Design <IoIosArrowDropdown />
            {dropdownToggle && (
              <Dropdown
                onMouseEnter={() => setDropdownToggle(true)}
                onMouseLeave={() => setDropdownToggle(false)}
              >
                <NavItem>
                  <NavLinks to="/designForeCeil">Molding Design</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/designMolding">False-Ceil Design</NavLinks>
                </NavItem>
              </Dropdown>
            )}
          </NavItem>

          <NavItem>
            <NavLinks to="about_us"> About Us</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
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
      <Aside display={menuToggle} onClose={closeMenu} />
    </Nav>
  );
}

export default NavBar;
