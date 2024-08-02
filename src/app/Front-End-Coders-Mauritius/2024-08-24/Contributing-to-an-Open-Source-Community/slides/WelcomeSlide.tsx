import { StyledQRCode } from "@/app/components/StyledQRCode";
import { Heading, Notes, Slide } from "spectacle";

export function WelcomeSlide() {
  return (
    <Slide>
      <Heading className="leading-tight">
        {"Contributing to an Open Source Community"}
      </Heading>
      <StyledQRCode value="slides.n-d-r-d-g.com/Front-End-Coders-Mauritius/2024-08-24/Contributing-to-an-Open-Source-Community?slideIndex=0&stepIndex=0" />
      <Notes>
        <ol className="list-decimal list-inside flex flex-col gap-2">
          <li>{"Brief intro on the topic."}</li>
          <li>{"Enlarge any QR codes throughout the presentation."}</li>
        </ol>
      </Notes>
    </Slide>
  );
}
