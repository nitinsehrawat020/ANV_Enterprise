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

  color: var(--white);
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
  @media ${device.mobile} {
    gap: 2rem;
  }
  @media ${device.tablet} {
    flex-direction: column-reverse;
  }
  @media ${device.mobile} {
    flex-direction: column-reverse;
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
  @media ${device.mobile} {
    gap: 0.7rem;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-lgi);
  gap: 2rem;
`;

export const StyledTitle = styled.div`
  width: 29rem;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${device.tablet} {
    width: 25rem;
  }
  @media ${device.mobile} {
    width: 20rem;
  }
`;
export const P = styled.div``;

export const PopDesign = styled.span`
  position: relative;
  color: #e7c067;
`;

export const Buttongroup = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 1.5rem;
  color: var(--color-gray);

  @media ${device.laptop} {
    flex-direction: column;
  }
  @media ${device.mobile} {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

export const ContactUs = styled.div`
  border-radius: var(--br-8xs);
  background-color: var(--color-steelblue);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-6xs) var(--padding-3xl);
  cursor: pointer;
`;
export const Howitwork = styled.div`
  border-radius: var(--br-8xs);

  border: 2px solid var(--color-steelblue);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-6xs) var(--padding-3xl);
  color: var(--color-steelblue);
`;

export const BannerChild = styled.div`
  flex-basis: 50%;
  border: 2px solid #363732;
  border-radius: 10px;
  align-self: stretch;
  margin-bottom: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.laptop} {
    margin: 0px 10px;
  }

  @media ${device.mobile} {
    margin: 0px 10px;
  }
`;
