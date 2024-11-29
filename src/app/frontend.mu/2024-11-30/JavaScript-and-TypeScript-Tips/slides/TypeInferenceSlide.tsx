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
            `\nconfig.depth; // Property 'depth' does not exist on type` +
            `\nconfig.width = '20px';` +
            `\nconfig.width; // Typed as string`}
        </Code>
      </div>
      <Notes>
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>
            {
              "We can only add key-value pairs to config during initialization (not after) without modifying anything else (no type/interface needs modification)."
            }
          </li>
          <li>
            {
              "config is not bound to any type, i.e. we can add key-value pairs during config's initialization without modifying anything else."
            }
          </li>
          <li>{"Key autocomplete works."}</li>
        </ul>
      </Notes>
    </Slide>
  );
}
