import { Heading } from "@/app/components/Heading";
import { Slide } from "spectacle";

export function AFewWiseWordsSlide() {
  return (
    <Slide>
      <Heading>{"A few wise words"}</Heading>
      <p className="italic leading-snug text-5xl text-center text-balance p-4 m-4">
        {
          "There are a lot of problems to solve in the world, especially now that we're empowered to even look at issues that would otherwise overwhelm us."
        }
      </p>
    </Slide>
  );
}
