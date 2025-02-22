import Logo from "../navbar/Logo";
import Heading from "../../ui/Heading";
import { LoginContainer, StyledFrom, StyledInput } from "./StyleLogin";

function Login({ onFlip, active }) {
  return (
    <LoginContainer active={active}>
      <Logo />
      <Heading as="h2">Welcome Back!</Heading>
      <Heading as="h3">Login to your account</Heading>
      <StyledFrom>
        <StyledInput type="email" placeholder="Email" hi="login" />
        <StyledInput type="password" placeholder="Password" hi="login" />
        <StyledInput type="submit" value="Login" />
      </StyledFrom>
      <p>
        Don&apos;t have an account?{" "}
        <span onClick={() => onFlip(false)}>Sign up</span>
      </p>
    </LoginContainer>
  );
}

export default Login;
