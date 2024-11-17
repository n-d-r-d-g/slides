import { Heading } from "@/app/components/Heading";
import { StyledQRCode } from "@/app/components/StyledQRCode";
import { Notes, Slide } from "spectacle";

export function WelcomeSlide() {
  return (
    <Slide>
      <Heading>{"JavaScript & TypeScript Tips"}</Heading>
      <StyledQRCode
        value={`${process.env.NEXT_PUBLIC_SLIDES_APP_URL}Front-End-Coders-Mauritius/2024-11-30/JavaScript-and-TypeScript-Tips`}
        prependHttps={process.env.NODE_ENV !== "development"}
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
