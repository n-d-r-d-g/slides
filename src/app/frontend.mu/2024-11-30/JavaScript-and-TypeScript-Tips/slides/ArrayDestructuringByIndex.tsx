import { Code } from "@/app/components/Code";
import { Heading } from "@/app/components/Heading";
import { Notes, Slide } from "spectacle";

export function ArrayDestructuringByIndex() {
  return (
    <Slide className="w-full h-full max-w-full max-h-full flex flex-col [&>div]:w-full [&>div]:h-full">
      <Heading>{"Array destructuring by index"}</Heading>
      <div className="max-w-full h-96 mx-auto">
        <Code lang="javascript">
          {`const roles = ["ADMIN", "SUPERUSER", "USER"];` +
            `\nconst [admin, superuser] = roles;// [!code --]` +
            `\nconst {1: superuser} = roles;// [!code ++]` +
            `\nconsole.log(superuser);`}
        </Code>
      </div>
      {/* <Notes>
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
      </Notes> */}
    </Slide>
  );
}
