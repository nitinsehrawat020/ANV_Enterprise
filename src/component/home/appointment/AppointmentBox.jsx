import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { BoxTitle, StyledBox } from "./appointmerntStyle";

function AppointmentBox({ icon, title, description }) {
  return (
    <StyledBox>
      <BoxTitle>
        <Icon icon={icon} width="35" height="35" style={{ color: "#fff" }} />
        <p>{title}</p>
      </BoxTitle>
      <span>{description}</span>
    </StyledBox>
  );
}

export default AppointmentBox;
