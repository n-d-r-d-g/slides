import { Heading } from "@/app/components/Heading";
import { Slide } from "spectacle";
import Image from "next/image";
import gitLensImage from "./gitlens-interactive-rebase.jpg";

export function GitLensInteractiveRebaseSlide() {
  return (
    <Slide>
      <Heading>{"Git: GitLens Interactive Rebase"}</Heading>
      <div className="flex gap-8 mt-10 items-start">
        <div className="flex-1">
          <ul className="list-disc list-inside flex flex-col gap-5 px-8">
            <li className="text-[40px] leading-snug">Visual interface</li>
            <li className="text-[40px] leading-snug">Drag & drop to reorder</li>
            <li className="text-[40px] leading-snug">Dropdown menu</li>
          </ul>
        </div>
        <div className="flex-1">
          <Image 
            src={gitLensImage} 
            alt="GitLens Interactive Rebase interface"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </Slide>
  );
}