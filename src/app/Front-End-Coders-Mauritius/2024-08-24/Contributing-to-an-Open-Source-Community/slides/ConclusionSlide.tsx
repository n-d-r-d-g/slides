import { Heading, Notes, Slide, Text } from "spectacle";

export function ConclusionSlide() {
  return (
    <Slide>
      <Heading className="leading-tight">{"Conclusion"}</Heading>
      <Text textAlign="center" className="italic leading-snug text-balance">
        {
          "It's a full circle. However, this can only keep going if we all help out."
        }
      </Text>
      <Notes>
        <ul className="list-disc list-inside flex flex-col gap-5">
          <li>{"Find your own way to contribute"}</li>
        </ul>
      </Notes>
    </Slide>
  );
}
