import { Code } from "@/app/components/Code";
import { Heading } from "@/app/components/Heading";
import { Slide } from "spectacle";

export function CompoundFieldsConcatenationSlide() {
  return (
    <Slide className="w-full h-full max-w-full max-h-full flex flex-col [&>div]:w-full [&>div]:h-full">
      <Heading>{"Compound fields concatenation"}</Heading>
      <div className="max-w-full h-[32rem] mx-auto">
        <Code lang="javascript">
          {`const title = "Mrs.";` +
            `\nconst fName = "Jane";` +
            `\nconst oNames = "";` +
            `\nconst lName = "Foster";` +
            `\nconst name = \`\${title} \${fName} \${oNames} \${lName}\`;// [!code --]` +
            `\n// Mrs. Jane  Foster;// [!code --]` +
            `\nconst name = [title, fName, oNames, lName].filter(Boolean).join(" ");// [!code ++]` +
            `\n// Mrs. Jane Foster;// [!code ++]`}
        </Code>
      </div>
    </Slide>
  );
}
