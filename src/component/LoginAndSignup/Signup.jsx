import Heading from "../../ui/Heading";
import Logo from "../navbar/Logo";
import { Label, SignupContainer, StyledFrom, StyledInput } from "./StyleLogin";

function Signup({ onFlip, active }) {
  return (
    <SignupContainer active={active}>
      <Logo />
      <Heading as="h2">Welcome!</Heading>
      <Heading as="h5">Enter details to become a part of us </Heading>
      <StyledFrom>
        <p>
          <Label htmlFor="firstName">First Name</Label>
          <StyledInput type="text" placeholder="First Name" id="firstName" />
        </p>
        <p>
          <Label htmlFor="lastName">Last Name</Label>
          <StyledInput type="text" placeholder="Last Name" id="lastName" />
        </p>
        <p>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <StyledInput
            type="number"
            placeholder="Phone Number"
            id="phoneNumber"
          />
        </p>
        <p>
          <Label htmlFor="email">Email</Label>
          <StyledInput type="email" placeholder="Email" id="email" />
        </p>
        <span>
          <Label htmlFor="address">Address</Label>
          <StyledInput type="text" placeholder="Address" id="address" />
        </span>

        <p>
          <Label htmlFor="password">Password</Label>
          <StyledInput type="password" placeholder="Password" id="password" />
        </p>
        <p>
          <Label htmlFor="ReenterPassword">Re enter Password</Label>
          <StyledInput
            type="password"
            placeholder="Re-Password"
            id="ReenterPassword"
          />
        </p>
        <StyledInput type="submit" value="Sign up" />
      </StyledFrom>
      <p>
        Already have an account? <span onClick={() => onFlip(true)}>Login</span>
      </p>
    </SignupContainer>
  );
}

export default Signup;
