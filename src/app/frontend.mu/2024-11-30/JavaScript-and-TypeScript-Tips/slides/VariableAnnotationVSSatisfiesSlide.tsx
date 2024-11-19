import { Code } from "@/app/components/Code";
import { Heading } from "@/app/components/Heading";
import { Notes, Slide } from "spectacle";

export function VariableAnnotationVSSatisfiesSlide() {
  return (
    <Slide className="w-full h-full max-w-full max-h-full flex flex-col [&>div]:w-full [&>div]:h-full">
      <Heading>{"Variable annotation v/s satisfies"}</Heading>
      <div className="max-w-full h-[32rem] mx-auto">
        <Code lang="typescript">
          {`const config: Record<string, string | number> = {// [!code --]` +
            `\n\twidth: '100px',// [!code --]` +
            `\n\theight: 0,// [!code --]` +
            `\n};// [!code --]` +
            `\nconst config = {// [!code ++]` +
            `\n\twidth: '100px',// [!code ++]` +
            `\n\theight: 0,// [!code ++]` +
            `\n} satisfies Record<string, string | number>;// [!code ++]`}
        </Code>
      </div>
      <Notes>
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>
            {
              "Use variable annotation if you will add new properties to the object after initialization."
            }
          </li>
          <li>
            {
              "Use satisfies if the object is initialized once and never modified again."
            }
          </li>
          <li>
            {
              "In this example, with variable annotation, `config.` will not autocomplete with config's keys, but with satisfies, it will."
            }
          </li>
          <li>
            {
              "In this example, autocomplete works the same with satisfies and a plain JS config object without specified types. The difference is, with satisfies, we can specify the type of config's properties."
            }
          </li>
        </ul>
      </Notes>
    </Slide>
  );
}
