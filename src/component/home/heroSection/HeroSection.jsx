import Carousel from "../../../ui/Carousel";

import Title from "./Title";
import HeaderButton from "./HeaderButton";

import { HerosectionRoot, Header, HeaderContainer, BannerChild } from ".";

function HeroSection() {
  return (
    <HerosectionRoot>
      <Header>
        <HeaderContainer>
          <Title />
          <HeaderButton />
        </HeaderContainer>
        <BannerChild>
          <Carousel />
        </BannerChild>
      </Header>
    </HerosectionRoot>
  );
}

export default HeroSection;
