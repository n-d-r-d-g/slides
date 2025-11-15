import { Code } from "@/app/components/Code";
import { Heading } from "@/app/components/Heading";
import Image from "next/image";
import { Notes, Slide } from "spectacle";
import fixupCommitsImage from "./fixup-commits.jpg";

export function FixupCommitsSlide() {
  return (
    <Slide className="w-full h-full max-w-full max-h-full flex flex-col [&>div]:w-full [&>div]:h-full">
      <Heading>{"Git: Fixup Commits"}</Heading>
      <p className="text-4xl text-center mt-10 mb-6">Squash multiple commits together</p>
      <div className="max-w-full mx-auto">
        <Code lang="bash">
          {`git rebase -i PREVIOUS_COMMIT_HASH_BEFORE_FIXUP_DESTINATION`}
        </Code>
      </div>
      <div className="mt-12 flex justify-center">
        <Image
          src={fixupCommitsImage}
          alt="Fixup commits in interactive rebase"
          className="rounded-lg shadow-lg"
        />
      </div>
      <Notes>
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>Fixup commits automatically mark commits to be squashed</li>
          <li>Great for code reviews: make fixes without cluttering history</li>
        </ul>
      </Notes>
    </Slide>
  );
}