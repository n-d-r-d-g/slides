import {
  Grid,
  Heading,
  ListItem,
  Notes,
  Slide,
  UnorderedList,
} from "spectacle";

export function OpenSourceCharacteristicsSlide() {
  return (
    <Slide>
      <Heading className="leading-tight">{"Characteristics"}</Heading>
      <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={16}>
        <UnorderedList fontSize={40} className="flex flex-col leading-snug">
          <ListItem>
            <span className="font-black underline">{"code is public:"}</span>
            {" transparency v/s risk of being copied"}
          </ListItem>
          <ListItem>
            <span className="font-black underline">
              {"contributions are public:"}
            </span>
            {" increased visibility v/s mistakes are also visible"}
          </ListItem>
          <ListItem>
            <span className="font-black underline">{"networking:"}</span>
            {" new business v/s social awkwardness"}
          </ListItem>
        </UnorderedList>
        <UnorderedList fontSize={40} className="flex flex-col leading-snug">
          <ListItem>
            <span className="font-black underline">{"self-improvement:"}</span>
            {
              " improve technical & soft skills, patience v/s possible in private communities"
            }
          </ListItem>
          <ListItem>
            <span className="font-black underline">
              {"contributions are generally not paid:"}
            </span>
            {
              " help keep open source communities open v/s no incentive (priorities)"
            }
          </ListItem>
        </UnorderedList>
      </Grid>
      <Notes>
        <ul className="list-disc list-inside flex flex-col gap-2">
          <li>{"Not pros & cons!"}</li>
        </ul>
      </Notes>
    </Slide>
  );
}
