import { Heading } from "@/app/components/Heading";
import { Kbd } from "@/app/components/Kbd/Kbd";
import { Slide } from "spectacle";
import searchViewImage from "./search-view.jpg";
import Image from "next/image";

export function SearchViewSlide() {
  return (
    <Slide>
      <Heading>{"VSCode: Search View"}</Heading>
      <Image
        src={searchViewImage}
        alt="Fixup commits in interactive rebase"
        className="rounded-lg shadow-lg mx-auto mt-10 mb-6"
      />
      <p className="text-4xl text-center mb-6">
        <Kbd>Command</Kbd> + <Kbd>Shift</Kbd> + <Kbd>F</Kbd>
      </p>
      <p className="text-4xl text-center mb-6">
        <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>F</Kbd>
      </p>
    </Slide>
  );
}