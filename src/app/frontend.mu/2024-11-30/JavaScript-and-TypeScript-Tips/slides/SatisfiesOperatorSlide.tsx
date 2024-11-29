import { Code } from "@/app/components/Code";
import { Heading } from "@/app/components/Heading";
import { Notes, Slide } from "spectacle";

export function SatisfiesOperatorSlide() {
  return (
    <Slide className="w-full h-full max-w-full max-h-full flex flex-col [&>div]:w-full [&>div]:h-full">
      <Heading>{"satisfies operator"}</Heading>
      <div className="max-w-full h-[32rem] mx-auto">
        <Code lang="typescript">
          {`type Config = { [key: string]: string | number; }` +
            `\nconst config = {` +
            `\n\twidth: '100px',` +
            `\n} satisfies Config;` +
            `\nconfig.depth = ''; // Property 'depth' does not exist on type '{ width: string; }'` +
            `\nconfig.width = 3; // Type 'number' is not assignable to type 'string'` +
            `\nconfig.width; //  Typed as string`}
        </Code>
      </div>
      <Notes>
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>
            {"We cannot add key-value pairs to config after initialization."}
          </li>
          <li>
            {
              "config is bound to type Config, i.e. config's properties have to respect their respective types."
            }
          </li>
          <li>
            {
              "Each property's type is either a string or number based on its value."
            }
          </li>
          <li>{"Key autocomplete works."}</li>
          <li>{"`satisfies` was introduced in version 4.9."}</li>
        </ul>
      </Notes>
    </Slide>
  );
}
