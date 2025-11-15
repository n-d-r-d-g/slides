import { Code } from "@/app/components/Code";
import { Heading } from "@/app/components/Heading";
import { Notes, Slide } from "spectacle";

export function PatchSlide() {
  return (
    <Slide className="w-full h-full max-w-full max-h-full flex flex-col [&>div]:w-full [&>div]:h-full">
      <Heading>{"Git: Patch"}</Heading>
      <p className="text-4xl text-center mt-10 mb-6">Transfer changes without committing</p>
      <div className="max-w-full mx-auto">
        <Code lang="bash">
          {`# Generate patch on staged files`+
          `\ngit diff --cached > fix.patch`+
          `\n# Apply patch`+
          `\ngit apply fix.patch`}
        </Code>
      </div>
      <Notes>
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>Useful for transferring work between colleagues</li>
          <li>Share code changes without commits</li>
          <li>Test changes in different environments</li>
        </ul>
      </Notes>
    </Slide>
  );
}