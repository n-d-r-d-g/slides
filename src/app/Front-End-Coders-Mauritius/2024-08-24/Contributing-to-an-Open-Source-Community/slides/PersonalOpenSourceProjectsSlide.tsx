import { StyledQRCode } from "@/app/components/StyledQRCode";
import { FlexBox, Grid, Heading, Notes, Slide, Text } from "spectacle";

export function PersonalOpenSourceProjectsSlide() {
  return (
    <Slide>
      <Heading className="leading-tight">{"My projects"}</Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={16}>
        <FlexBox flexDirection="column">
          <Text fontSize={40} fontWeight={900}>
            {"MUDOCS"}
          </Text>
          <StyledQRCode value="mu-docs.netlify.app" />
        </FlexBox>
        <FlexBox flexDirection="column">
          <Text fontSize={40} fontWeight={900}>
            {"Mauritius Tax Calculator"}
          </Text>
          <StyledQRCode value="mauritius-tax-calculator.netlify.app" />
        </FlexBox>
      </Grid>
      <Notes>
        <ol className="list-decimal list-inside flex flex-col gap-5">
          <li>
            {"MUDOCS"}
            <ul className="list-disc list-inside ps-6">
              <li>
                {
                  "The problems I faced (mauritian terms, multiple entities, links to official "
                }
                <a
                  href="https://nlta.govmu.org/Documents/Downloads/Download%20Forms/deed-sale.pdf"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {"deed"}
                </a>{" "}
                {"& "}
                <a
                  href="https://nlta.govmu.org/Documents/Downloads/Letter%20for%20gage%20authorize.pdf"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {"letter"}
                </a>
                {")"}
              </li>
              <li>{"Description of how the app solves these problems"}</li>
              <li>{"Upcoming instructions: fitness, MVL (deklarasyon)"}</li>
              <li>{"Open to ideas - submit your PRs"}</li>
            </ul>
          </li>
          <li>
            {"Mauritius Tax Calculator"}
            <ul className="list-disc list-inside ps-6">
              <li>
                {"The problems I faced ("}
                <a
                  href="https://eservices.mra.mu/taxcalculator/viewCalculate"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {"link to offical website"}
                </a>
                {"): cluterred UI, light mode, responsiveness"}
              </li>
              <li>{"Description of how the app solves these problems"}</li>
              <li>{"Upcoming instructions: fitness, MVL (deklarasyon)"}</li>
            </ul>
          </li>
          <li>
            {
              "These slides have been built with code, i.e. dark mode, presenter mode, interactive"
            }
          </li>
          <li>{"Anyone knows how you say purchaser in Mauritian Creole?"}</li>
          <li>{"Anyone can contribute!"}</li>
        </ol>
      </Notes>
    </Slide>
  );
}
