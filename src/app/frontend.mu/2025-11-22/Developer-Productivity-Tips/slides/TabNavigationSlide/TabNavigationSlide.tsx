import { Heading } from "@/app/components/Heading";
import { Kbd } from "@/app/components/Kbd/Kbd";
import { Slide } from "spectacle";

export function TabNavigationSlide() {
  return (
    <Slide>
      <Heading>{"VSCode: Tab Navigation"}</Heading>
      <p className="text-4xl text-center mt-10 mb-6"><Kbd>Option</Kbd> + <Kbd>Command</Kbd> + <Kbd>←/→</Kbd></p>
      <p className="text-4xl text-center mb-6"><Kbd>Ctrl</Kbd> + <Kbd>PageUp/PageDown</Kbd></p>
    </Slide>
  );
}