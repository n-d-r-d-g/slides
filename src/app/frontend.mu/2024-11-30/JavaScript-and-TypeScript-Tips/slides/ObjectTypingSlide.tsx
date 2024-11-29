import { Code } from "@/app/components/Code";
import { Heading } from "@/app/components/Heading";
import { Slide } from "spectacle";

export function ObjectTypingSlide() {
  return (
    <Slide className="w-full h-full max-w-full max-h-full flex flex-col [&>div]:w-full [&>div]:h-full">
      <Heading>{"Typing an object"}</Heading>
      <div className="max-w-full h-[32rem] mx-auto">
        <Code lang="typescript">
          {`const config = {` + `\n\twidth: '100px',` + `\n};`}
        </Code>
      </div>
    </Slide>
  );
}
