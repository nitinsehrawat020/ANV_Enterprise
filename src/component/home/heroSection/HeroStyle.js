import styled from "styled-components";
import { device } from "../../../Styles/Theme";

export const HerosectionRoot = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  background: radial-gradient(
    12.39% 70.17% at 51.53% 0%,
    #5e5e5e 0%,
    #464646 100%
  );
  color: var(--color-white-500);
  font-family: var(--font-roboto);
`;

export const Header = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  max-width: 75rem;

  @media ${device.tablet} {
    flex-direction: column-reverse;
    gap: 2rem;
  }
  @media ${device.mobile} {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;
export const HeaderContainer = styled.div`
  align-self: stretch;
  flex-basis: 50%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 2.062rem 8rem; */
  gap: 2rem;

  @media ${device.phnAndTab} {
    gap: 0.7rem;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs) var(--padding-xs);
  gap: 2rem;
`;

export const StyledTitle = styled.div`
  width: 29rem;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${device.laptop} {
    width: 25rem;
  }
  @media ${device.tablet} {
    width: 25rem;
  }
  @media ${device.mobile} {
    width: 20rem;
  }
`;
export const P = styled.div``;

export const PopDesign = styled.span`
  /* position: relative; */
  color: var(--color-secondary);
`;

export const Buttongroup = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.5rem;
  color: var(--color-gray);

  @media ${device.laptop} {
  }
  @media ${device.tablet} {
  }
  @media ${device.mobile} {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

export const ContactUs = styled.div`
  border-radius: var(--br-m);
  background-color: var(--color-primary);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs-1) var(--padding-xs-1);
  cursor: pointer;

  &:hover {
    background-color: transparent;
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
  }
`;
export const Howitwork = styled.div`
  border-radius: var(--br-m);

  border: 2px solid var(--color-primary);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-xs-1) var(--padding-xs-1);
  color: var(--color-primary);
  cursor: pointer;
`;

export const Image = styled.div`
  flex-basis: 50%;
  /* border: 2px solid #363732; */
  border-radius: 10px;
  align-self: stretch;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
  }

  @media ${device.laptop} {
    margin: 1.5rem 0px;
  }
  @media ${device.tablet} {
    margin: 0px 10px;
  }
  @media ${device.mobile} {
    margin: 0rem 10px;
  }
`;
