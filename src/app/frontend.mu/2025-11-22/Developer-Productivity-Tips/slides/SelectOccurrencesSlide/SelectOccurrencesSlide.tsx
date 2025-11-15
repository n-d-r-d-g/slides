import { Heading } from "@/app/components/Heading";
import { Kbd } from "@/app/components/Kbd/Kbd";
import { Slide, Text } from "spectacle";

export function SelectOccurrencesSlide() {
  return (
    <Slide>
      <Heading>{"VSCode: Select Occurrences"}</Heading>
        <div className="mt-10 mb-6">
          <p className="text-4xl text-center mb-6"><Kbd>Command</Kbd> + <Kbd>D</Kbd></p>
          <p className="text-4xl text-center"><Kbd>Ctrl</Kbd> + <Kbd>D</Kbd></p>
        </div>
        <div className="mt-6 mb-6">
          <p className="text-4xl text-center mb-6"><Kbd>Shift</Kbd> + <Kbd>Command</Kbd> + <Kbd>L</Kbd></p>
          <p className="text-4xl text-center"><Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>L</Kbd></p>
        </div>
    </Slide>
  );
}