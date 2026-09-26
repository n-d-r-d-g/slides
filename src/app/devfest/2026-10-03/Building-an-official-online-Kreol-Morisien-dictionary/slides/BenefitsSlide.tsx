import { Heading } from "@/app/components/Heading";
import { Slide } from "spectacle";

export function BenefitsSlide() {
  return (
    <Slide>
      <Heading>{"Benefits"}</Heading>
      <ul className="list-disc list-inside flex flex-col gap-5 px-8">
        <li className="text-[40px] leading-snug">
          {"Search by Kreol Morisien (KM), English & French"}
        </li>
        <li className="text-[40px] leading-snug">
          {"Correct KM translations by AI"}
        </li>
        <li className="text-[40px] leading-snug">
          {"Access to diaspora, tourists, students, etc."}
        </li>
        <li className="text-[40px] leading-snug">
          {"Ideas, e.g. translation service, online message filtering"}
        </li>
      </ul>
    </Slide>
  );
}
