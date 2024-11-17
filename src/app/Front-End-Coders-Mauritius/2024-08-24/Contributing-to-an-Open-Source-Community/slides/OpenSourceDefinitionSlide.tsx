import { Heading } from "@/app/components/Heading";
import { Slide } from "spectacle";

export function OpenSourceDefinitionSlide() {
  return (
    <Slide>
      <Heading>{"What's open source?"}</Heading>
      <table className="!w-fit mx-auto mt-28">
        <thead>
          <tr className="leading-tight">
            <td className="!text-center font-bold rounded-t-3xl rounded-b-lg text-[2rem] bg-zinc-200 dark:bg-zinc-900">
              {"Open"}
            </td>
            <td>{""}</td>
            <td className="!text-center font-bold rounded-t-3xl rounded-b-lg text-[2rem] bg-zinc-200 dark:bg-zinc-900">
              {"Source"}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr className="leading-tight">
            <td className="text-[2.75rem]">{"everyone has access"}</td>
            <td className="px-20 !text-3xl italic">{"to the"}</td>
            <td className="text-[2.75rem]">{"source code"}</td>
          </tr>
        </tbody>
      </table>
    </Slide>
  );
}
