import { Heading } from "@/app/components/Heading";
import { Kbd } from "@/app/components/Kbd/Kbd";
import { Slide, Text } from "spectacle";

export function SwitchWindowsSlide() {
  return (
    <Slide>
      <Heading>{"VSCode: Switch Windows"}</Heading>
      <div className="mt-10 mb-6">
        <p className="text-4xl text-center mb-6">
          <Kbd>Command</Kbd> + <Kbd>`</Kbd>
        </p>
        <p className="text-4xl text-center">
          <Kbd>Shift</Kbd> + <Kbd>Command</Kbd> + <Kbd>`</Kbd>
        </p>
      </div>
      <div className="mt-6">
        <p className="text-4xl text-center mb-6">
          <Kbd>Ctrl</Kbd> + <Kbd>`</Kbd>
        </p>
        <p className="text-4xl text-center">
          <Kbd>Shift</Kbd> + <Kbd>Ctrl</Kbd> + <Kbd>`</Kbd>
        </p>
      </div>
    </Slide>
  );
}