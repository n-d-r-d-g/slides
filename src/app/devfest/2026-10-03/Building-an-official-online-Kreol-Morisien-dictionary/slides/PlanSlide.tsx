import { Heading } from "@/app/components/Heading";
import { Slide } from "spectacle";

export function PlanSlide() {
  return (
    <Slide>
      <Heading>{"Plan"}</Heading>
      <ul className="list-disc list-inside flex flex-col gap-5 px-8">
        <li className="text-[40px] leading-snug">
          {"Build a POC (higher impact)"}
        </li>
        <li className="text-[40px] leading-snug">
          {"Contact the CSU/author with POC link"}
        </li>
        <li className="text-[40px] leading-snug">
          {"Request access to hard copy's soft data"}
        </li>
      </ul>
    </Slide>
  );
}
