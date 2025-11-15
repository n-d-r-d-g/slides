import { Heading } from "@/app/components/Heading";
import { Kbd } from "@/app/components/Kbd/Kbd";
import { Slide } from "spectacle";

export function RenameSymbolSlide() {
  return (
    <Slide>
      <Heading>{"VSCode: Rename Symbol"}</Heading>
      <p className="text-4xl text-center mt-10 mb-6"><Kbd>F2</Kbd></p>
    </Slide>
  );
}