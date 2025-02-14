import Heading from "../../../ui/Heading";
import {
  AppointmentContainer,
  BoxConatiner,
  StyledAppointment,
  Title,
} from "./appointmerntStyle";
import AppointmentBox from "./AppointmentBox";

function Appointment() {
  return (
    <>
      <StyledAppointment>
        <AppointmentContainer>
          <Title>
            <Heading as="h2">How to Book An Appointment</Heading>
          </Title>
          <BoxConatiner>
            <AppointmentBox
              icon="line-md:phone-call-twotone-loop"
              title="Book Online "
              description="Book a appointment with by leaving your contact information or
              call us"
            />
            <AppointmentBox
              icon="line-md:clipboard-list"
              title="Chosse Design"
              description="Choose the design that suit your choice and let us know if we can
              help"
            />
            <AppointmentBox
              icon="line-md:loading-twotone-loop"
              title="Getting started with our magic"
              description="As soon as you provide the design our worker will start turning
              your place into your dream place"
            />
            <AppointmentBox
              icon="line-md:home"
              title="Ready to move in"
              description="Your home will be raedy in the estimate time and your home is all
              ready for you to move in"
            />
          </BoxConatiner>
        </AppointmentContainer>
      </StyledAppointment>
    </>
  );
}

export default Appointment;
