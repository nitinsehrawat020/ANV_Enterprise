import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import Autoplay from "embla-carousel-autoplay";
import { device } from "../Styles/Theme";

const Embla = styled.div`
  display: flex;
  overflow: hidden;
  max-width: 80%;
  text-align: center;

  @media ${device.tablet} {
    max-width: 70%;
  }

  @media ${device.mobile} {
    max-width: 70%;
  }
`;
const Embla__container = styled.div`
  display: flex;
`;
const Embla__slide = styled.div`
  flex: 0 0 100%; /* Slide covers 80% of the viewport */

  @media ${device.mobile} {
    /* flex: 0 0 80%; */
  }

  img {
    width: 90%;
    height: auto;
    padding: 10px;
  }
`;

function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <>
      <Embla ref={emblaRef}>
        <Embla__container>
          <Embla__slide>
            <img src="/pictures/banner/image1.webp" />
          </Embla__slide>
          <Embla__slide>
            <img src="/pictures/banner/image2.webp" />
          </Embla__slide>
          <Embla__slide>
            <img src="/pictures/banner/image3.webp" />
          </Embla__slide>
        </Embla__container>
      </Embla>
    </>
  );
}

export default Carousel;
