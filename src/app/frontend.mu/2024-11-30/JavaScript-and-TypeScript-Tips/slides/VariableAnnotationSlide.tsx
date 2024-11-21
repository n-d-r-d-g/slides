import { Code } from "@/app/components/Code";
import { Heading } from "@/app/components/Heading";
import { Notes, Slide } from "spectacle";

export function VariableAnnotationSlide() {
  return (
    <Slide className="w-full h-full max-w-full max-h-full flex flex-col [&>div]:w-full [&>div]:h-full">
      <Heading>{"Variable annotation"}</Heading>
      <div className="max-w-full h-[32rem] mx-auto">
        <Code lang="typescript">
          {`type Config = { [key: string]: string | number; }` +
            `\nconst config: Config = {` +
            `\n\twidth: '100px',` +
            `\n};` +
            `\nconfig.depth = '40px';` +
            `\nconfig.width; //  Typed as string | number` +
            `\nconfig.width = 20;` +
            `\nconfig.width; //  Typed as number` +
            `\nconfig.isActive = true; // Type 'boolean' is not assignable to type 'string | number'`}
        </Code>
      </div>
      <Notes>
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>
            {
              "We can add key-value pairs to config during and after initialization without modifying anything else (no type/interface needs modification) IF THE TYPE/INTERFACE IS LOOSE."
            }
          </li>
          <li>
            {
              "config is bound to type Config, i.e. config's properties have to respect their respective types."
            }
          </li>
          <li>
            {
              "Each property's type is string | number if not modified after initialization. If it is, it's either a string or number based on its value."
            }
          </li>
          <li>{"Key autocomplete doesn't work."}</li>
        </ul>
      </Notes>
    </Slide>
  );
}
