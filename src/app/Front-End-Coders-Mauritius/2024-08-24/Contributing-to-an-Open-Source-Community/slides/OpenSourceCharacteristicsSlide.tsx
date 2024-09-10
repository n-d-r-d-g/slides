import { Heading, Notes, Slide } from "spectacle";

export function OpenSourceCharacteristicsSlide() {
  return (
    <Slide className="w-full h-full max-w-full max-h-full flex flex-col [&>div]:w-full [&>div]:h-full">
      <Heading className="leading-tight">{"Characteristics"}</Heading>
      <ol className="list-decimal list-inside min-h-0 grow flex flex-col flex-wrap gap-x-4 gap-y-10 leading-tight">
        <li className="max-w-[calc(50%-16px)] font-extrabold text-[40px]">
          <span className="underline">{"Code is public:"}</span>
          <span className="block mt-2 font-normal text-[32px]">
            {"transparency"}
            <span className="whitespace-nowrap hyphens-none">{" v/s "}</span>
            {"risk of being copied"}
          </span>
        </li>
        <li className="max-w-[calc(50%-16px)] font-extrabold text-[40px]">
          <span className="underline">{"Contributions are public:"}</span>
          <span className="block mt-2 font-normal text-[32px]">
            {"increased visibility"}
            <span className="whitespace-nowrap hyphens-none">{" v/s "}</span>
            {"mistakes are also visible"}
          </span>
        </li>
        <li className="max-w-[calc(50%-16px)] font-extrabold text-[40px]">
          <span className="underline">{"Self-improvement:"}</span>
          <span className="block mt-2 font-normal text-[32px]">
            {"improve technical & soft skills, patience"}
            <span className="whitespace-nowrap hyphens-none">{" v/s "}</span>
            {"possible in private communities"}
          </span>
        </li>
        <li className="max-w-[calc(50%-16px)] font-extrabold text-[40px]">
          <span className="underline">{"Networking:"}</span>
          <span className="block mt-2 font-normal text-[32px]">
            {"new business"}
            <span className="whitespace-nowrap hyphens-none">{" v/s "}</span>
            {"social awkwardness"}
          </span>
        </li>
        <li className="max-w-[calc(50%-16px)] font-extrabold text-[40px]">
          <span className="underline">
            {"Contributions are generally not paid:"}
          </span>
          <span className="block mt-2 font-normal text-[32px]">
            {"help keep open source communities open"}
            {" v/s "}
            {"no incentive (priorities)"}
          </span>
        </li>
        <li className="max-w-[calc(50%-16px)] font-extrabold text-[40px]">
          <span className="underline">{"More leverage:"}</span>
          <span className="block mt-2 font-normal text-[32px]">
            {"higher pay"}
            {" v/s "}
            {"more tricky questions"}
          </span>
        </li>
      </ol>
      <Notes>
        <em className="inline-block mb-5 font-bold before:content-['#'] before:inline-block before:me-[0.75ch]">
          {"Not pros & cons! Just characteristics to reflect on."}
        </em>
        <ol className="list-decimal list-inside flex flex-col gap-5">
          <li>
            {
              "Anyone can see the quality of your work. Your code can also be copied by anyone and used in their codebase."
            }
          </li>
          <li>
            {
              "Potential clients & agencies can view your code, how you communicate with others... but also your mistakes."
            }
          </li>
          <li>
            {
              "In private communities, e.g an organization, you sometimes don't have the freedom to try new things on the job, therefore, there's an added stress. But this does not happen everywhere."
            }
          </li>
          <li>
            {
              "Increased visibility to new clients and recruiters. But you're also exposed to new people, which can be an issue for you if you're introverted."
            }
          </li>
          <li>{"You may or may not have the time to contribute."}</li>
          <li>
            {
              "helps with negotiating on expertise & experience instead of years of service"
            }
          </li>
        </ol>
      </Notes>
    </Slide>
  );
}
