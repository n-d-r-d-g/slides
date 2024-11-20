import { Code } from "@/app/components/Code";
import { Heading } from "@/app/components/Heading";
import { Notes, Slide } from "spectacle";

export function TypeInferenceSlide() {
  return (
    <Slide className="w-full h-full max-w-full max-h-full flex flex-col [&>div]:w-full [&>div]:h-full">
      <Heading>{"Type inference"}</Heading>
      <div className="max-w-full h-[32rem] mx-auto">
        <Code lang="typescript">
          {`const config = {` +
            `\n\twidth: '100px',` +
            `\n\theight: 0,` +
            `\n};` +
            `\n\nconfig.depth; // Property 'heights' does not exist on type`}
        </Code>
      </div>
      <Notes>
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>
            {
              "PRO: we can add key-value pairs in config without modifying anything else (no type/interface needs modification)."
            }
          </li>
          <li>{"CON: config is not bound to any type."}</li>
        </ul>
      </Notes>
    </Slide>
  );
}
