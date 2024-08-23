import { StyledQRCode } from "@/app/components/StyledQRCode";
import { Heading, Notes, Slide } from "spectacle";

export function WelcomeSlide() {
  return (
    <Slide>
      <Heading className="leading-tight">
        {"Contributing to an Open Source Community"}
      </Heading>
      <StyledQRCode
        value="slides.n-d-r-d-g.com/Front-End-Coders-Mauritius/2024-08-24/Contributing-to-an-Open-Source-Community"
        prependHttps
      />
      <Notes>
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>{"Brief intro on the topic."}</li>
          <li>{"Enlarge any QR codes throughout the presentation."}</li>
          <li>
            {
              "Feel free to interrupt me during the presentation to ask questions."
            }
          </li>
        </ul>
      </Notes>
    </Slide>
  );
}
