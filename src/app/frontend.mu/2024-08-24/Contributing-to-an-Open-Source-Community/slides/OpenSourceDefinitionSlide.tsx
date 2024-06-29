import {
  Heading,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "spectacle";

export function OpenSourceDefinitionSlide() {
  return (
    <Slide>
      <Heading>{"What's open source?"}</Heading>
      <Table className="!w-fit mx-auto mt-28">
        <TableHeader>
          <TableRow>
            <TableCell
              className="!text-center rounded-t-3xl rounded-b-lg bg-zinc-200 dark:bg-zinc-900"
              fontSize={32}
            >
              {"Open"}
            </TableCell>
            <TableCell>{""}</TableCell>
            <TableCell
              className="!text-center rounded-t-3xl rounded-b-lg bg-zinc-200 dark:bg-zinc-900"
              fontSize={32}
            >
              {"Source"}
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{"everyone has access"}</TableCell>
            <TableCell className="px-20 !text-3xl italic">{"to the"}</TableCell>
            <TableCell>{"source code"}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Slide>
  );
}
