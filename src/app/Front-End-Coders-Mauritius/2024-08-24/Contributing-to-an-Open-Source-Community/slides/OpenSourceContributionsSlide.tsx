import { Heading, Slide } from "spectacle";

export function OpenSourceContributionsSlide() {
  return (
    <Slide>
      <Heading className="leading-tight">{"My Contributions"}</Heading>
      <ul className="list-disc list-inside flex flex-col gap-5">
        <li className="text-[40px] leading-snug">
          {"DevCon 2024 (DevConMU Scheduler)"}
        </li>
        <li className="text-[40px] leading-snug">{"frontend.mu"}</li>
        <li className="text-[40px] leading-snug">{"webconf"}</li>
      </ul>
    </Slide>
  );
}
