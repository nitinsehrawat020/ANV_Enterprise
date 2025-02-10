import Carousel from "../../../ui/Carousel";

import {
  HerosectionRoot,
  Banner,
  Titlecontainer,
  Title,
  YourTrustedPartnerContainer1,
  YourTrustedPartnerContainer,
  YourTrustedPartner,
  PopDesign,
  Buttongroup,
  ContactUs,
  HowItWorks,
  Howitwork,
  BannerChild,
} from ".";

function HeroSection() {
  return (
    <HerosectionRoot>
      <Banner>
        <Titlecontainer>
          <Title>
            <YourTrustedPartnerContainer1>
              <YourTrustedPartnerContainer>
                <YourTrustedPartner>
                  your trusted partner for creative
                </YourTrustedPartner>
                {` `}
              </YourTrustedPartnerContainer>
            </YourTrustedPartnerContainer1>
            <PopDesign>Pop Design</PopDesign>
          </Title>
          <Buttongroup>
            <ContactUs>
              <HowItWorks>CONTACT US</HowItWorks>
            </ContactUs>
            <Howitwork>
              <HowItWorks>HOW IT WORKS?</HowItWorks>
            </Howitwork>
          </Buttongroup>
        </Titlecontainer>
        <BannerChild>
          <Carousel />
        </BannerChild>
      </Banner>
    </HerosectionRoot>

    // <>
    //   <HeroContainer>
    //     <StyledHeroSection>
    //       <HeroContent />
    //       <HeroCarousel />
    //     </StyledHeroSection>
    //   </HeroContainer>
    // </>
  );
}

export default HeroSection;
