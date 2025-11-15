import { Code } from "@/app/components/Code";
import { Heading } from "@/app/components/Heading";
import { Notes, Slide } from "spectacle";

export function SplitCommitsSlide() {
  return (
    <Slide className="w-full h-full max-w-full max-h-full flex flex-col [&>div]:w-full [&>div]:h-full">
      <Heading>{"Git: Split Commits"}</Heading>
      <p className="text-4xl text-center mt-10 mb-6">{"Break one commit into multiple smaller commits"}</p>
      <div className="max-w-full mx-auto">
        <Code lang="bash">
          {`git rebase -i HEAD~N`+
          `\ngit reset HEAD^ # Undo the commit, but keep changes`+
          `\ngit add file1 && git commit -m 'First part'`+
          `\ngit add file2 && git commit -m 'Second part'`+
          `\ngit rebase --continue`}
        </Code>
      </div>
      <Notes>
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>Useful when a commit contains unrelated changes</li>
          <li>Helps maintain atomic commits</li>
          <li>Makes code review easier</li>
        </ul>
      </Notes>
    </Slide>
  );
}