import styled from "styled-components";
import { device } from "../../../Styles/Theme";

//shoping section
export const StyledShoping = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ShopingContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  @media ${device.mobile} {
    gap: 1rem;
  }
`;
export const ShopingTitle = styled.div`
  /* background: linear-gradient(180deg, #e7c067, #816b3a); */
  border-radius: var(--br-l);
  padding: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white-500);
`;

//FalseCeilDesign

export const StyledModle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ModleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  /* padding: 3rem; */

  @media ${device.tablet} {
    flex-direction: column;
  }
  @media ${device.mobile} {
    flex-direction: ${(props) => (props.reverse ? `column-reverse` : `column`)};
    gap: 1.5rem;
  }
`;
export const BackgroundConnect = styled.div`
  display: block;
  position: absolute;
  top: 70;
  left: 40%;
  width: 690px;
  height: 180px;
  z-index: 0;
  background-color: var(--color-background-700);
  border-radius: var(--br-xl);
`;

export const ModleTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--padding-ls) var(--padding-s);
  color: #fff;
  background: var(--color-background-800);
  border-radius: var(--br-l);
  gap: 1rem;
  z-index: 1;

  @media ${device.laptop} {
    padding: 1.8rem 1.3rem;
  }
  @media ${device.mobile} {
    padding: 1.8rem 1.3rem;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* min-width: 280px; */

  span {
    color: #e7c067;
    text-align: center;
  }
`;

export const CardBox = styled.div`
  display: flex;
  align-self: center;
  gap: 1.5rem;
  justify-content: space-between;
  z-index: 1;
  @media ${device.mobile} {
    margin: 0rem 1rem;
    gap: 0.7rem;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 0.6rem;
  background: #363732;
  @media ${device.mobile} {
    padding: 1rem;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    max-width: 15rem;
    border-radius: 0.4rem;
  }
`;
