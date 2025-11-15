import { Heading } from "@/app/components/Heading";
import { Kbd } from "@/app/components/Kbd/Kbd";
import { Slide } from "spectacle";

export function SortLinesSlide() {
  return (
    <Slide>
      <Heading>{"VSCode: Sort Lines"}</Heading>
      <p className="text-4xl text-center mt-10 mb-6"><Kbd>Command</Kbd> + <Kbd>Shift</Kbd> + <Kbd>P</Kbd></p>
      <p className="text-4xl text-center mb-6"><Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>P</Kbd></p>
      <p className="text-4xl text-center mt-6">Then type: <span className="italic font-bold">Sort Lines...</span></p>
    </Slide>
  );
}