import { Heading } from "@/app/components/Heading";
import { Kbd } from "@/app/components/Kbd/Kbd";
import { Slide } from "spectacle";

export function DuplicateLineSlide() {
  return (
    <Slide>
      <Heading>{"VSCode: Duplicate Line Up/Down"}</Heading>
      <p className="text-4xl text-center mt-10 mb-6"><Kbd>Shift</Kbd> + <Kbd>Option</Kbd> + <Kbd>↑/↓</Kbd></p>
      <p className="text-4xl text-center mb-6"><Kbd>Shift</Kbd> + <Kbd>Alt</Kbd> + <Kbd>↑/↓</Kbd></p>
    </Slide>
  );
}