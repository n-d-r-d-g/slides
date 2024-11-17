import { Heading } from "@/app/components/Heading";
import { Notes, Slide, Text } from "spectacle";

export function ConclusionSlide() {
  return (
    <Slide>
      <Heading>{"Conclusion"}</Heading>
      <p className="italic leading-snug text-5xl text-center text-balance p-4 m-4">
        {
          "It's a full circle. However, this can only keep going if we all help out."
        }
      </p>
      <Notes>
        <ul className="list-disc list-inside flex flex-col gap-5">
          <li>{"Find your own way to contribute"}</li>
          <li>{"No need to be an expert to contribute"}</li>
          <li>
            {
              "A lot of open source communities to contribute to. frontend.mu is one of them. You also have plenty online."
            }
          </li>
        </ul>
      </Notes>
    </Slide>
  );
}
