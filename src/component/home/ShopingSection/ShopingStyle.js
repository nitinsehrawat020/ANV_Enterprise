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
  gap: 2.5rem;
`;
export const ShopingTitle = styled.div`
  background: linear-gradient(180deg, #e7c067, #816b3a);
  border-radius: var(--br-l);
  padding: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//FalseCeilDesign

export const StyledFalseCeil = styled.div`
  display: flex;
  max-width: 1200px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: var(--);
`;

export const FalseCeilContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 3rem;

  @media ${device.tablet} {
    flex-direction: column;
  }
  @media ${device.mobile} {
    flex-direction: column;
  }
`;
export const FalseCeilTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 33px;
  color: #fff;
  background: #363732;

  span {
    color: #e7c067;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  width: 292px;
  height: 346px;
  padding: 20px 23px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 13px;
  flex-shrink: 0;
  background: #363732;
  overflow: hidden;
`;
export const CardContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: flex-start;
  gap: 9px;
  flex-shrink: 0;
  background: #d9d9d9;

  img {
    width: 100%;
    height: auto;
  }
`;

export const CardBox = styled.div`
  width: 100%;
`;
