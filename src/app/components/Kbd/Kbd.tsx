import clsx from "clsx";
import { ReactNode } from "react";

interface KbdProps {
  children: ReactNode;
  className?: string;
}

export function Kbd({ children, className = "" }: KbdProps) {
  return (
    <kbd className={clsx("px-2 py-1 mx-1 rounded-md border border-b-2 inline-block font-mono text-center bg-gray-100 text-gray-900 border-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600", className)}>
      {children}
    </kbd>
  );
}