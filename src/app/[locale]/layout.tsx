import "../globals.css";

import type { Metadata } from "next";
import { NextIntlClientProvider, useLocale } from "next-intl";

import { geistMono, inter, satoshi } from "@/app/fonts/fonts";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: {
    default: "Erik Štvrtecký",
    template: "%s | Erik Štvrtecký",
  },
  description:
    "Computer science student based in Brno, with a growing focus on web development and design.",
};

export default function RootLayout({ children }: LayoutProps<"/[locale]">) {
  const locale = useLocale();

  return (
    <html
      lang={locale}
      className={`${geistMono.variable} ${inter.variable} ${satoshi.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
