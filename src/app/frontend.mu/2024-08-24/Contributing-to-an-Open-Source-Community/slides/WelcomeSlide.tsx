import { Heading } from "@/app/components/Heading";
import { StyledQRCode } from "@/app/components/StyledQRCode";
import { Notes, Slide } from "spectacle";

export function WelcomeSlide() {
  return (
    <Slide>
      <Heading>{"Contributing to an Open Source Community"}</Heading>
      <StyledQRCode
        value={`${process.env.NEXT_PUBLIC_SLIDES_APP_URL}frontend.mu/2024-08-24/Contributing-to-an-Open-Source-Community`}
        prependHttps={process.env.NODE_ENV !== "development"}
        className="mt-10"
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
