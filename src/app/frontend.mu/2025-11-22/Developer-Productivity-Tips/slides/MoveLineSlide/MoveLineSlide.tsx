import { Heading } from "@/app/components/Heading";
import { Kbd } from "@/app/components/Kbd/Kbd";
import { Slide } from "spectacle";

export function MoveLineSlide() {
  return (
    <Slide>
      <Heading>{"VSCode: Move Line Up/Down"}</Heading>
      <p className="text-4xl text-center mt-10 mb-6"><Kbd>Option</Kbd> + <Kbd>↑/↓</Kbd></p>
      <p className="text-4xl text-center mb-6"><Kbd>Alt</Kbd> + <Kbd>↑/↓</Kbd></p>
    </Slide>
  );
}