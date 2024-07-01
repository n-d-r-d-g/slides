import { StyledQRCode } from "@/app/components/StyledQRCode";
import { FlexBox, Grid, Heading, Slide, Text } from "spectacle";

export function PersonalOpenSourceProjectsSlide() {
  return (
    <Slide>
      <Heading className="leading-tight">{"My projects"}</Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={16}>
        <FlexBox flexDirection="column">
          <Text fontSize={40} fontWeight={900}>
            MUDOCS
          </Text>
          <StyledQRCode value="mu-docs.netlify.app" />
        </FlexBox>
        <FlexBox flexDirection="column">
          <Text fontSize={40} fontWeight={900}>
            Mauritius Tax Calculator
          </Text>
          <StyledQRCode value="mauritius-tax-calculator.netlify.app" />
        </FlexBox>
      </Grid>
    </Slide>
  );
}
