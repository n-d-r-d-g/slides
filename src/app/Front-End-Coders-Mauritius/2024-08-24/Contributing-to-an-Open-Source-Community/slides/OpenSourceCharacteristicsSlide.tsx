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
        <UnorderedList fontSize={30} className="flex flex-col leading-snug">
          <ListItem className="flex flex-col">
            <span className="font-black underline text-[40px]">
              {"Code is public:"}
            </span>
            <span>{"transparency v/s risk of being copied"}</span>
          </ListItem>
          <ListItem className="flex flex-col">
            <span className="font-black underline text-[40px]">
              {"Contributions are public:"}
            </span>
            <span>{"increased visibility v/s mistakes are also visible"}</span>
          </ListItem>
          <ListItem className="flex flex-col">
            <span className="font-black underline text-[40px]">
              {"Self-improvement:"}
            </span>
            <span>
              {
                "improve technical & soft skills, patience v/s possible in private communities"
              }
            </span>
          </ListItem>
        </UnorderedList>
        <UnorderedList fontSize={30} className="flex flex-col leading-snug">
          <ListItem className="flex flex-col">
            <span className="font-black underline text-[40px]">
              {"Networking:"}
            </span>
            <span>{"new business v/s social awkwardness"}</span>
          </ListItem>
          <ListItem className="flex flex-col">
            <span className="font-black underline text-[40px]">
              {"Contributions are generally not paid:"}
            </span>
            <span>
              {
                "help keep open source communities open v/s no incentive (priorities)"
              }
            </span>
          </ListItem>
          <ListItem className="flex flex-col">
            <span className="font-black underline text-[40px]">
              {"More leverage:"}
            </span>
            <span>{"higher pay v/s more tricky questions"}</span>
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
