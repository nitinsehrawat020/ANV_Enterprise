import { ImCross } from "react-icons/im";
import {
  CloseButton,
  ListItem,
  ListLink,
  StyledAside,
  StyledList,
} from "./styleAside";

function Aside({ display, onClose }) {
  return (
    <StyledAside display={display}>
      <CloseButton>
        <ImCross onClick={onClose} />
      </CloseButton>
      <StyledList>
        <ListItem>
          <ListLink to="/" onClick={onClose}>
            Home
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink to="/design" onClick={onClose}>
            Design
          </ListLink>
        </ListItem>
        <ListItem>
          <ListLink onClick={onClose}>False Ceil Design</ListLink>
        </ListItem>
        <ListItem>
          <ListLink onClick={onClose}>Molding Design</ListLink>
        </ListItem>
        <ListItem>
          <ListLink onClick={onClose}>About Us</ListLink>
        </ListItem>
      </StyledList>
    </StyledAside>
  );
}

export default Aside;
