import { CardContainer, StyledCard } from "./ShopingStyle";

function TitleCard({ src }) {
  return (
    <StyledCard>
      <CardContainer>
        <img src={src} />
      </CardContainer>
    </StyledCard>
  );
}

export default TitleCard;
