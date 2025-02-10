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

  @media ${device.laptop} {
    flex-direction: column-reverse;
  }
  @media ${device.mobile} {
    flex-direction: column-reverse;
  }
`;
export const HeaderContainer = styled.div`
  align-self: stretch;
  flex: 0.6209;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.062rem 8rem;
  gap: 4rem;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-5xl) var(--padding-lgi);
  gap: var(--gap-3xs);
`;

export const StyledTitle = styled.div`
  width: 29rem;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  line-height: 50px;
`;
export const P = styled.div``;

export const PopDesign = styled.span`
  position: relative;
  color: #e7c067;
`;

export const Buttongroup = styled.div`
  width: 32.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-lgi) var(--padding-4xl);
  box-sizing: border-box;
  gap: 1.687rem;
  font-size: var(--font-size-7xl);
  color: var(--color-gray);

  @media ${device.laptop} {
    flex-direction: column;
  }
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const ContactUs = styled.div`
  flex: 1;
  box-shadow: -2px -2px 12.4px #000;
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
  flex: 1;
  box-shadow: -2px -2px 12.4px #000;
  border-radius: var(--br-8xs);
  background-color: var(--color-gray);
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
  align-self: stretch;
  flex: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
