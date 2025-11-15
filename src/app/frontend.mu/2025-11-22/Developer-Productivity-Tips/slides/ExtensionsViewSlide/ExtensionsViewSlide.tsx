import { Heading } from "@/app/components/Heading";
import { Kbd } from "@/app/components/Kbd/Kbd";
import Image from "next/image";
import { Slide } from "spectacle";
import extensionsViewImage from "./extensions-view.jpg";

export function ExtensionsViewSlide() {
  return (
    <Slide>
      <Heading>{"VSCode: Extensions View"}</Heading>
      <Image
        src={extensionsViewImage}
        alt="Fixup commits in interactive rebase"
        className="rounded-lg shadow-lg mx-auto mt-10 mb-6"
      />
      <p className="text-4xl text-center mb-6">
        <Kbd>Command</Kbd> + <Kbd>Shift</Kbd> + <Kbd>X</Kbd>
      </p>
      <p className="text-4xl text-center mb-6">
        <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>X</Kbd>
      </p>
    </Slide>
  );
}