import { Outlet } from "react-router-dom";

import styled from "styled-components";
import NavBar from "../component/navbar/NavBar";

const StyledAppLayout = styled.div`
  width: 100%;
  height: auto;

  background: var(--color-background-500);
`;

function AppLayout() {
  return (
    <>
      <StyledAppLayout>
        <NavBar />
        <Outlet />
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
