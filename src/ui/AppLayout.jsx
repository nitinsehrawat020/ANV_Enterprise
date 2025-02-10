import { Outlet } from "react-router-dom";

import styled from "styled-components";
import NavBar from "../component/navbar/NavBar";

const StyledAppLayout = styled.div`
  width: 100%;
  height: auto;

  background: #464646;
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
