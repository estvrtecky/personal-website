import "./globals.css";

import type { Metadata } from "next";

import { geistMono, inter, satoshi } from "@/app/fonts/fonts";
import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Erik Štvrtecký",
    template: "%s | Erik Štvrtecký",
  },
  description:
    "Computer science student based in Brno, with a growing focus on web development and design.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${inter.variable} ${satoshi.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
