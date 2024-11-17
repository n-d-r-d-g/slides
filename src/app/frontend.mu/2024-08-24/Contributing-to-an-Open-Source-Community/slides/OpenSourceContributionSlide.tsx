import { Heading } from "@/app/components/Heading";
import { Notes, Slide } from "spectacle";

export function OpenSourceContributionSlide() {
  return (
    <Slide>
      <Heading>{"How to contribute"}</Heading>
      <ul className="flex flex-col gap-8 text-[2.5rem] leading-snug p-8">
        <li>
          <span className="font-bold underline">{"Code-related:"}</span>
          {
            " create issues, create/review PRs, give a star, answer questions from other devs (online: Github, Discord, StackOverflow or elsewhere; in-person: events like meetups)"
          }
        </li>
        <li>
          <span className="font-bold underline">{"Events:"}</span>
          {
            " organize (plan, look for sponsors, logistics)/advertise (write blog posts, share on social media)/sponsor"
          }
        </li>
        <li>
          <span className="font-bold underline">{"Educational content:"}</span>
          {" create lessons/courses, bootcamps"}
        </li>
      </ul>
      <Notes>
        <ul className="list-disc list-inside">
          <li>No need to be a developer or an expert to contribute</li>
        </ul>
      </Notes>
    </Slide>
  );
}
