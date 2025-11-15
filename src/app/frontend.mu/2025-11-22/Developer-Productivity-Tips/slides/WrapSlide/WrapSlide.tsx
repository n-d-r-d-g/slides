import { Heading } from "@/app/components/Heading";
import { Kbd } from "@/app/components/Kbd/Kbd";
import { Slide } from "spectacle";

export function WrapSlide() {
  return (
    <Slide>
      <Heading>{"VSCode: Wrap with Tag"}</Heading>
      <p className="text-4xl text-center mt-10 mb-6"><Kbd>Command</Kbd> + <Kbd>Shift</Kbd> + <Kbd>P</Kbd></p>
      <p className="text-4xl text-center mb-6"><Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>P</Kbd></p>
      <p className="text-4xl text-center mt-6">Then type: <span className="italic font-bold">Wrap with Abbreviation</span></p>
    </Slide>
  );
}