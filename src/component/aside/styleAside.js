import styled from "styled-components";

export const StyledAside = styled.div`
  grid-area: aside;
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.display === "false" ? "none" : "flex")};
    width: 300px;
    height: 80%;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-10%, 10%);
    border-radius: 0px 0px 10px 10px;
    background-color: var(--color-background-800);
    color: var(--color-white-500);
    transition: all 1sec ease-in-out;
  }
`;
