import { Code } from "@/app/components/Code";
import { Heading } from "@/app/components/Heading";
import { Notes, Slide } from "spectacle";

export function ConstAssertionSlide() {
  return (
    <Slide className="w-full h-full max-w-full max-h-full flex flex-col [&>div]:w-full [&>div]:h-full">
      <Heading>{"const assertion"}</Heading>
      <div className="max-w-full h-[32rem] mx-auto">
        <Code lang="typescript">
          {`const config = {` +
            `\n\twidth: '100px',` +
            `\n\theight: 0,` +
            `\n} as const;` +
            `\nconfig.depth; // Property 'depth' does not exist on type` +
            `\nconfig.width = ''; // Cannot assign to 'width' (read-only property)` +
            `\nconfig.width; // strongly typed as 100px, not string`}
        </Code>
      </div>
      <Notes>
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>
            {"We cannot add key-value pairs to config after initialization."}
          </li>
          <li>
            {
              "config is not bound to any type, i.e. we can add key-value pairs during config's initialization without modifying anything else."
            }
          </li>
          <li>
            {"The actual value of each property is inferred as the type."}
          </li>
          <li>{"Key autocomplete works."}</li>
        </ul>
      </Notes>
    </Slide>
  );
}
