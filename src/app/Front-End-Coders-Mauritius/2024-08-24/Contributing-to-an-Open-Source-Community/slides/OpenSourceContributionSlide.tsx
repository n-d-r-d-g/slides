import { Heading, ListItem, Slide, UnorderedList } from "spectacle";

export function OpenSourceContributionSlide() {
  return (
    <Slide>
      <Heading className="leading-tight">{"How to contribute"}</Heading>
      <UnorderedList fontSize={40} className="flex flex-col leading-snug">
        <ListItem>
          <span className="font-black underline">{"Codebase:"}</span>
          {
            " create issues, create/review PRs, give a star, answer questions from other devs (online: Github, Discord, StackOverflow or elsewhere; in-person: events like meetups)"
          }
        </ListItem>
        <ListItem>
          <span className="font-black underline">{"Events:"}</span>
          {
            " organize (plan, look for sponsors, logistics)/advertise (write blog posts, share on social media)/sponsor"
          }
        </ListItem>
        <ListItem>
          <span className="font-black underline">{"Educational content:"}</span>
          {" create lessons/courses"}
        </ListItem>
      </UnorderedList>
    </Slide>
  );
}
