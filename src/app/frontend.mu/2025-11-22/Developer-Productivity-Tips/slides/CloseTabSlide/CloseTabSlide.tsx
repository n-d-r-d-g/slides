import { Heading } from "@/app/components/Heading";
import { Kbd } from "@/app/components/Kbd/Kbd";
import { Slide } from "spectacle";

export function CloseTabSlide() {
  return (
    <Slide>
      <Heading>{"VSCode: Close Current Tab"}</Heading>
      <p className="text-4xl text-center mt-10 mb-6">
        <Kbd>Command</Kbd> + <Kbd>W</Kbd>
      </p>
      <p className="text-4xl text-center mb-6">
        <Kbd>Ctrl</Kbd> + <Kbd>W</Kbd>
      </p>
    </Slide>
  );
}