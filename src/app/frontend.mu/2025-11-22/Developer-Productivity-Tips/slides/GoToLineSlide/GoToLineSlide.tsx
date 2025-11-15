import { Heading } from "@/app/components/Heading";
import { Kbd } from "@/app/components/Kbd/Kbd";
import { Slide } from "spectacle";

export function GoToLineSlide() {
  return (
    <Slide>
      <Heading>{"VSCode: Go to Line"}</Heading>
      <p className="text-4xl text-center mt-10 mb-6"><Kbd>Command</Kbd> + <Kbd>P</Kbd>, then <Kbd>:</Kbd></p>
      <p className="text-4xl text-center mb-6"><Kbd>Ctrl</Kbd> + <Kbd>P</Kbd>, then <Kbd>:</Kbd></p>
    </Slide>
  );
}