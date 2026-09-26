import { Heading } from "@/app/components/Heading";
import { Slide } from "spectacle";

export function BackstorySlide() {
  return (
    <Slide>
      <Heading>{"Backstory"}</Heading>
      <ul className="list-disc list-inside flex flex-col gap-5 px-8">
        <li className="text-[40px] leading-snug">
          {"2024 - building apps for Mauritians"}
        </li>
        <li className="text-[40px] leading-snug">
          {"No official online dictionary - Lalit (not exhaustive)"}
        </li>
        <li className="text-[40px] leading-snug">
          {"Purchased hard copy (figured Lalit contains errors)"}
        </li>
        <li className="text-[40px] leading-snug">
          {"What if I built an online dictionary?"}
        </li>
        <li className="text-[40px] leading-snug">
          {"Contacted CSU and dictionary author"}
        </li>
        <li className="text-[40px] leading-snug">
          {"2026 - Casual convo with someone who knows someone"}
        </li>
      </ul>
    </Slide>
  );
}
