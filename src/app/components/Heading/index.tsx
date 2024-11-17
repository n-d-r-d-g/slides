import { cn } from "@/app/utils/functions";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
};

export function Heading({ className, children }: Props) {
  return (
    <h1
      className={cn(
        "text-7xl text-center font-bold leading-tight p-4 m-6",
        className
      )}
    >
      {children}
    </h1>
  );
}
