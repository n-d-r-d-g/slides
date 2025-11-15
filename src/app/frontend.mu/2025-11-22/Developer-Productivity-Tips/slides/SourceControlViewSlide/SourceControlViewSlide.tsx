import { Heading } from "@/app/components/Heading";
import { Kbd } from "@/app/components/Kbd/Kbd";
import Image from "next/image";
import { Slide } from "spectacle";
import sourceControlViewImage from "./source-control-view.jpg";

export function SourceControlViewSlide() {
  return (
    <Slide>
      <Heading>{"VSCode: Source Control View"}</Heading>
      <Image
        src={sourceControlViewImage}
        alt="Fixup commits in interactive rebase"
        className="rounded-lg shadow-lg mx-auto mt-10 mb-6"
      />
      <p className="text-4xl text-center mb-6">
        <Kbd>Control</Kbd> + <Kbd>Shift</Kbd> + <Kbd>G</Kbd>
      </p>
      <p className="text-4xl text-center mb-6">
        <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>G</Kbd>
      </p>
    </Slide>
  );
}