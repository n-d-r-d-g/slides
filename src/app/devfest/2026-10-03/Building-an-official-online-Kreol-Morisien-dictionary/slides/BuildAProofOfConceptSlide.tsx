import { Heading } from "@/app/components/Heading";
import { Notes, Slide } from "spectacle";

export function BuildAProofOfConceptSlide() {
  return (
    <Slide>
      <Heading>{"Build a Proof of Concept"}</Heading>
      <ul className="list-disc list-inside flex flex-col gap-5 px-8">
        <li className="text-[40px] leading-snug">
          {"Discovery with Claude - lexonomy.eu"}
        </li>
        <li className="text-[40px] leading-snug">
          {"Scan 100 entries required to make the dictionary public"}
        </li>
        <li className="text-[40px] leading-snug">
          {"Scan lexical information to provide Claude more context"}
        </li>
        <li className="text-[40px] leading-snug">{"Feed to Claude"}</li>
        <li className="text-[40px] leading-snug">
          {"Claude is trained on old lexonomy.eu data"}
        </li>
        <li className="text-[40px] leading-snug">
          {"Scan synonyms & references"}
        </li>
        <li className="text-[40px] leading-snug">
          {"Mistakes detected, entry layout config & reset on upload"}
        </li>
      </ul>
      <Notes>
         <ul className="list-disc list-inside flex flex-col gap-2">
          <li>{"Mistake 1: ABIYMAN - starts with definition number 2"}</li>
          <li>{"Mistake 2: ABSTINANS - variation is the same as the main entry"}</li>
        </ul>
      </Notes>
    </Slide>
  );
}
