import { Code } from "@/app/components/Code";
import { Heading } from "@/app/components/Heading";
import { Slide } from "spectacle";

export function ObjectGettersAndSettersSlide() {
  return (
    <Slide className="w-full h-full max-w-full max-h-full flex flex-col [&>div]:w-full [&>div]:h-full">
      <Heading>{"Object getters & setters"}</Heading>
      <div className="max-w-full h-[32rem] mx-auto">
        <Code lang="javascript">
          {`const obj = {` +
            `\n\ttext: "Welcome",` +
            `\n\thistory: [],` +
            `\n\tset welcomeText(text) {` +
            `\n\t\tthis.history.push({date: new Date(), text});` +
            `\n\t\tthis.text = text;` +
            `\n\t},` +
            `\n\tget reverseHistory() {` +
            `\n\t\treturn this.history.toReversed();` +
            `\n\t},` +
            `\n}`}
        </Code>
      </div>
    </Slide>
  );
}
