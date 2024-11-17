import { Heading } from "@/app/components/Heading";
import { StyledQRCode } from "@/app/components/StyledQRCode";
import { FlexBox, Grid, Notes, Slide, Text } from "spectacle";

export function PersonalOpenSourceProjectsSlide() {
  return (
    <Slide>
      <Heading>{"My projects"}</Heading>
      <div className="grid grid-cols-[1fr_1fr] gap-4">
        <div className="flex flex-col">
          <p className="text-[2.5rem] text-center font-extrabold p-4 m-4">
            {"MUDOCS"}
          </p>
          <StyledQRCode value="mu-docs.netlify.app" prependHttps />
        </div>
        <div className="flex flex-col">
          <p className="text-[2.5rem] text-center font-extrabold p-4 m-4">
            {"Mauritius Tax Calculator"}
          </p>
          <StyledQRCode
            value="mauritius-tax-calculator.netlify.app"
            prependHttps
          />
        </div>
      </div>
      <Notes>
        <ol className="list-decimal list-inside flex flex-col gap-5">
          <li>
            {"MUDOCS"}
            <ul className="list-disc list-inside ps-6">
              <li>
                {
                  "The problems I faced (mauritian terms - papie gaz, deklarasyon, fitness; multiple entities - nlta, registrar, insurance; links to official "
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
          <li>{"Anyone knows how you say purchaser in Mauritian Creole?"}</li>
          <li>
            {
              "I built a few other projects. You can check them out on my GitHub account."
            }
          </li>
          <li>
            {
              "These slides have been built with code, i.e. dark mode, presenter mode, interactive, command palette"
            }
          </li>
          <li>{"Anyone can contribute!"}</li>
        </ol>
      </Notes>
    </Slide>
  );
}
