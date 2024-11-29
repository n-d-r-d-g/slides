import { Heading } from "@/app/components/Heading";
import { StyledQRCode } from "@/app/components/StyledQRCode";
import { Slide } from "spectacle";

export function LinksSlide() {
  return (
    <Slide className="w-full h-full max-w-full max-h-full flex flex-col [&>div]:w-full [&>div]:h-full">
      <Heading>{"Links"}</Heading>
      <ul className="flex flex-row gap-32 text-3xl mx-auto">
        <li>
          <StyledQRCode value="github.com/n-d-r-d-g/patterns" prependHttps />
        </li>
        <li>
          <StyledQRCode value="www.youtube.com/c/mattpocock" prependHttps />
        </li>
      </ul>
    </Slide>
  );
}
