import { Heading } from "@/app/components/Heading";
import { Kbd } from "@/app/components/Kbd/Kbd";
import { Slide } from "spectacle";

export function RestoreTerminalSlide() {
  return (
    <Slide>
      <Heading>{"VSCode: Restore Terminal"}</Heading>
      <p className="text-4xl text-center mt-10 mb-6"><Kbd>Control</Kbd> + <Kbd>`</Kbd></p>
      <p className="text-4xl text-center mb-6"><Kbd>Ctrl</Kbd> + <Kbd>`</Kbd></p>
    </Slide>
  );
}