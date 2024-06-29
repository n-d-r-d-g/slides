import { Heading, Slide, Text } from "spectacle";

export function ConclusionSlide() {
  return (
    <Slide>
      <Heading>{"Conclusion"}</Heading>
      <Text textAlign="center" className="italic">
        {
          "It's a full circle. However, this can only keep going if we all help out."
        }
      </Text>
    </Slide>
  );
}
