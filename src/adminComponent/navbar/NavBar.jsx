import Account from "./Account";
import Logo from "./Logo";
import Menu from "./Menu";
import { StyleNavBar, StyleNavBarContainer } from "./StyleNavBar";

function NavBar() {
  return (
    <StyleNavBar>
      <StyleNavBarContainer>
        <Logo />
        <Menu />
        <Account />
      </StyleNavBarContainer>
    </StyleNavBar>
  );
}

export default NavBar;
