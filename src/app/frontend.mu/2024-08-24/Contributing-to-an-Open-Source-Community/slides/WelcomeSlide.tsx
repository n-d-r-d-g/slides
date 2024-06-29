import { StyledQRCode } from "@/app/components/StyledQRCode";
import { FlexBox, Heading, Slide } from "spectacle";

export function WelcomeSlide() {
  return (
    <Slide>
      <Heading>{"Contributing to an Open Source Community"}</Heading>
      <StyledQRCode value="slides.n-d-r-d-g.com/frontend.mu/2024-08-24/Contributing-to-an-Open-Source-Community" />
    </Slide>
  );
}
