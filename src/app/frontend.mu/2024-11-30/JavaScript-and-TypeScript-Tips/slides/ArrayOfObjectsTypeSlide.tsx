import { Code } from "@/app/components/Code";
import { Heading } from "@/app/components/Heading";
import { Slide } from "spectacle";

export function ArrayOfObjectsTypeSlide() {
  return (
    <Slide className="w-full h-full max-w-full max-h-full flex flex-col [&>div]:w-full [&>div]:h-full">
      <Heading>{"Array[number]['property']"}</Heading>
      <div className="max-w-full h-[32rem] mx-auto">
        <Code lang="typescript">
          {`const themeOptions = [` +
            `\n\t{key: 'panda', label: 'Panda 🐼'},` +
            `\n\t{key: 'dracula', label: 'Dracula 🧛'},` +
            `\n\t{key: 'material', label: 'Material 🧻'},` +
            `\n] as const` +
            `\n\ntype Theme = typeof themeOptions[number]['key'];` +
            `\n// 'panda' | 'dracula' | 'material'`}
        </Code>
      </div>
    </Slide>
  );
}
