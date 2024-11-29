import { Code } from "@/app/components/Code";
import { Heading } from "@/app/components/Heading";
import { Slide } from "spectacle";

export function ReturnTypeSlide() {
  return (
    <Slide className="w-full h-full max-w-full max-h-full flex flex-col [&>div]:w-full [&>div]:h-full">
      <Heading>{"ReturnType"}</Heading>
      <div className="max-w-full h-[32rem] mx-auto">
        <Code lang="typescript">
          {`function func() {` +
            `\n\treturn 'test';` +
            `\n};` +
            `\ntype X = ReturnType<typeof func>; // string` +
            `\n\ntype Fn = StringConstructor | NumberConstructor | BooleanConstructor;` +
            `\n\nfunction cast<T extends Fn>(val: unknown, fn: T) {` +
            `\n\treturn fn(val) as ReturnType<typeof fn>;` +
            `\n}` +
            `\nconst castedVal1 = cast(123, String); // string` +
            `\nconst castedVal2 = cast("123", Number); // number` +
            `\nconst castedVal3 = cast(123, Boolean); // boolean`}
        </Code>
      </div>
    </Slide>
  );
}
