import { TitleContainer, StyledTitle, PopDesign, P } from ".";
import Heading from "../../../ui/Heading";

function Title() {
  return (
    <div>
      <TitleContainer>
        <Heading as="h1">
          <StyledTitle>
            <P>Your Trusted Partner For Creative</P>
            <PopDesign> Pop Design</PopDesign>
          </StyledTitle>
        </Heading>
      </TitleContainer>
    </div>
  );
}

export default Title;
