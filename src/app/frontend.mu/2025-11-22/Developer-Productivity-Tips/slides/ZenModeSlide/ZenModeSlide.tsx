import { Heading } from "@/app/components/Heading";
import { Kbd } from "@/app/components/Kbd/Kbd";
import { Slide } from "spectacle";

export function ZenModeSlide() {
  return (
    <Slide>
      <Heading>{"VSCode: Zen Mode"}</Heading>
      <p className="text-4xl text-center mt-10 mb-6">
        <Kbd>Control</Kbd> + <Kbd>Command</Kbd> + <Kbd>Z</Kbd>
      </p>
      <p className="text-4xl text-center mb-6">
        <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> + <Kbd>Z</Kbd>
      </p>
    </Slide>
  );
}