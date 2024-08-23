import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { AnimationModeProvider } from "./context/AnimationMode";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slides",
  description: "Slides used in my talks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <AnimationModeProvider>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </AnimationModeProvider>
      </body>
    </html>
  );
}
