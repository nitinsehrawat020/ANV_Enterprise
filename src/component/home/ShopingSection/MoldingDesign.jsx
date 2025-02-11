import Heading from "../../../ui/Heading";
import {
  FalseCeilTitle,
  FalseCeilContainer,
  StyledFalseCeil,
  CardBox,
} from "./ShopingStyle";
import TitleCard from "./TitleCard";

function MoldingDesign() {
  return (
    <StyledFalseCeil>
      <FalseCeilContainer>
        <CardBox>
          <TitleCard src="pictures/banner/image1.webp" />
          <TitleCard src="pictures/banner/image2.webp" />
        </CardBox>
        <Heading as="h3">
          <FalseCeilTitle>
            <span>Molding</span> DESIGN
          </FalseCeilTitle>
        </Heading>
      </FalseCeilContainer>
    </StyledFalseCeil>
  );
}

export default MoldingDesign;
