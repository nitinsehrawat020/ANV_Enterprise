import Heading from "../../../ui/Heading";
import {
  FalseCeilTitle,
  FalseCeilContainer,
  StyledFalseCeil,
} from "./ShopingStyle";
import TitleCard from "./TitleCard";

function FalseCeilDesign() {
  return (
    <StyledFalseCeil>
      <FalseCeilContainer>
        <Heading as="h3">
          <FalseCeilTitle>
            <span>FALSE CEILING</span> DESIGN
          </FalseCeilTitle>
        </Heading>
        <TitleCard src="pictures/banner/image1.webp" />
        <TitleCard src="pictures/banner/image2.webp" />
      </FalseCeilContainer>
    </StyledFalseCeil>
  );
}

export default FalseCeilDesign;
