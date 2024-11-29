import { Code } from "@/app/components/Code";
import { Heading } from "@/app/components/Heading";
import { Slide } from "spectacle";

export function ArrayDestructuringByIndexSlide() {
  return (
    <Slide className="w-full h-full max-w-full max-h-full flex flex-col [&>div]:w-full [&>div]:h-full">
      <Heading>{"Array destructuring by index"}</Heading>
      <div className="max-w-full h-96 mx-auto">
        <Code lang="javascript">
          {`const roles = ["ADMIN", "SUPERUSER", "USER"];` +
            `\nconst [admin, superuser] = roles;// [!code --]` +
            `\nconst {1: superuser} = roles;// [!code ++]` +
            `\nconsole.log(superuser); // "SUPERUSER"`}
        </Code>
      </div>
    </Slide>
  );
}
