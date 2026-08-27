import { Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";

export const geistMono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  display: "fallback",
  preload: false,
  fallback: ["monospace"],
  variable: "--font-geist-mono",
});

export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  fallback: ["system-ui", "sans-serif"],
  variable: "--font-inter",
});

export const satoshi = localFont({
  src: "./satoshi-variable.woff2",
  fallback: ["system-ui", "sans-serif"],
  variable: "--font-satoshi",
});
