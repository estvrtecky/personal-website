import Image from "next/image";
import Link from "next/link";
import {
  FaChevronRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelopeOpen,
} from "react-icons/fa6";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <main>
      <Section className="relative overflow-hidden justify-center min-h-dvh mt-[-64.8px] border-b border-(--border)">
        <div className="absolute z-0 inset-0 flex items-end justify-end">
          <div className="absolute z-1 -right-16 -bottom-8 w-96 h-96 rounded-full bg-green-100 dark:bg-green-950"></div>
          <div className="absolute z-2 inset-0 backdrop-blur-[128px]"></div>
        </div>

        {/* Hero section content */}
        <div className="relative z-10 flex flex-col md:flex-row md:gap-4 w-full max-w-7xl">
          <div className="flex items-center w-full min-h-dvh">
            <div>
              <div className="inline-flex items-center mb-6 md:mb-8 p-2 pr-3 border-2 border-white/25 rounded-full bg-white/15">
                <div className="relative w-4 h-4 mr-1.5">
                  <div className="absolute w-4 h-4 rounded-full bg-green-500/25 animate-pulse"></div>
                  <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs md:text-sm text-fg-muted">
                  Looking for new experiences
                </span>
              </div>
              <h1 className="mb-4 font-heading font-black text-5xl md:text-6xl leading-15 md:leading-18">
                Erik Štvrtecký
              </h1>
              <p className="mb-6 text-fg-muted">
                I&apos;m a computer science student based in Brno, with a
                growing focus on web development and design.
              </p>
              <div className="flex gap-2">
                <Link
                  href="mailto:contact@estvrtecky.com"
                  className="px-4 py-2 rounded-lg font-mono font-medium text-btn bg-fg hover:bg-(--neutral-800) dark:hover:bg-(--neutral-200) transition">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center md:justify-end items-center mb-16 md:mb-0">
            <div className="grid grid-cols-4 gap-2 w-full max-w-sm">
              {/* Picture of me */}
              <div className="relative overflow-hidden col-span-2 aspect-square rounded-2xl bg-(--bg-light) hover:shadow transition duration-300">
                <Image
                  src="https://stugrezwwrkmaoeikjsm.supabase.co/storage/v1/object/public/assets/me.jpg"
                  alt="Picture of me"
                  fill
                />
              </div>

              {/* Current role */}
              <div className="col-span-2 flex flex-col gap-2 aspect-square p-3 border-2 border-white/25 rounded-2xl hover:shadow transition duration-300 bg-white/25 backdrop-blur-lg">
                <div className="flex items-center gap-1.5">
                  <div className="relative overflow-hidden w-6 h-6 rounded bg-red-500">
                    <Image
                      src="https://stugrezwwrkmaoeikjsm.supabase.co/storage/v1/object/public/assets/vut.png"
                      alt="VUT Logo"
                      fill
                    />
                  </div>
                  <h3 className="font-heading text-sm">VUT FIT</h3>
                </div>
                <p className="grow font-heading font-medium">
                  Computer science student
                </p>
                <span className="font-mono text-xs text-center">
                  2025 - Present
                </span>
              </div>

              {/* Resumé link */}
              <Link
                href="https://stugrezwwrkmaoeikjsm.supabase.co/storage/v1/object/public/assets/cv.pdf"
                target="_blank"
                className="flex items-center justify-between col-span-3 px-4 py-3 border border-(--border) rounded-2xl bg-(--bg-light) hover:bg-(--bg) hover:shadow transtion duration-300">
                <div>
                  <h3 className="grow mb-1 font-heading font-medium text-2xl">
                    Resumé
                  </h3>
                  <p className="text-xs text-fg-muted">
                    See and download my resumé.
                  </p>
                </div>
                <FaChevronRight
                  aria-hidden
                  className="ml-4 text-fg-muted"
                />
              </Link>

              {/* Quick social links */}
              <div className="grid grid-cols-2 gap-2 aspect-square">
                <Link
                  href="https://www.github.com/estvrtecky"
                  target="_blank"
                  className="flex items-center justify-center aspect-square border border-(--border) rounded-2xl bg-(--bg-light) hover:bg-(--bg) hover:shadow transition duration-300">
                  <FaGithub aria-hidden />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/estvrtecky/"
                  target="_blank"
                  className="flex items-center justify-center aspect-square border border-(--border) rounded-2xl bg-(--bg-light) hover:bg-(--bg) hover:shadow transition duration-300">
                  <FaLinkedin aria-hidden />
                </Link>
                <Link
                  href="https://www.instagram.com/estvrtecky"
                  target="_blank"
                  className="flex items-center justify-center aspect-square border border-(--border) rounded-2xl bg-(--bg-light) hover:bg-(--bg) hover:shadow transition duration-300">
                  <FaInstagram aria-hidden />
                </Link>
                <Link
                  href="mailto:contact@estvrtecky.com"
                  className="flex items-center justify-center aspect-square border border-(--border) rounded-2xl bg-(--bg-light) hover:bg-(--bg) hover:shadow transition duration-300">
                  <FaRegEnvelopeOpen aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <Card className="px-6 py-8 hover:shadow dark:shadow-neutral-800 transition duration-300">
          <h2 className="mb-8 font-heading font-bold text-4xl">
            Education & Skills
          </h2>
          <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-16">
            <ul>
              <li className="flex">
                <div className="relative flex flex-col items-center w-2 ml-6 mr-8">
                  <div className="w-px grow bg-green-200 dark:bg-green-950"></div>
                  <div className="absolute top-1/2 w-2 h-2 rounded-full bg-green-500 -translate-y-1/2"></div>
                </div>
                <div className="py-3">
                  <h3 className="mb-1 font-heading font-medium text-xl">
                    Brno University of Technology
                  </h3>
                  <div className="divide-x divide-(--border) text-xs text-fg-muted">
                    <span className="pr-2">Computer Science</span>
                    <span className="pl-2 font-mono">2025 - Present</span>
                  </div>
                </div>
              </li>
              <li className="flex">
                <div className="relative flex flex-col items-center w-2 ml-6 mr-8">
                  <div className="w-px grow bg-green-200 dark:bg-green-950"></div>
                  <div className="absolute top-1/2 w-2 h-2 rounded-full bg-green-500 -translate-y-1/2"></div>
                </div>
                <div className="py-3">
                  <h3 className="mb-1 font-heading font-medium text-xl">
                    SPŠE Zochova
                  </h3>
                  <div className="divide-x divide-(--border) text-xs text-fg-muted">
                    <span className="pr-2">
                      Programming of Digital Technologies
                    </span>
                    <span className="pl-2 font-mono">2021 - 2025</span>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mr-6">
              <h3 className="my-3 font-heading font-medium text-xl">
                Programming languages
              </h3>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 border border-green-500 dark:border-green-800 rounded-full font-mono text-xs text-green-600 dark:text-green-500 bg-green-100 dark:bg-green-950">
                  TypeScript
                </span>
                <span className="px-2 py-1 border border-green-500 dark:border-green-800 rounded-full font-mono text-xs text-green-600 dark:text-green-500 bg-green-100 dark:bg-green-950">
                  Python
                </span>
                <span className="px-2 py-1 border border-green-500 dark:border-green-800 rounded-full font-mono text-xs text-green-600 dark:text-green-500 bg-green-100 dark:bg-green-950">
                  C
                </span>
                <span className="px-2 py-1 border border-green-500 dark:border-green-800 rounded-full font-mono text-xs text-green-600 dark:text-green-500 bg-green-100 dark:bg-green-950">
                  Assembly
                </span>
                <span className="px-2 py-1 border border-green-500 dark:border-green-800 rounded-full font-mono text-xs text-green-600 dark:text-green-500 bg-green-100 dark:bg-green-950">
                  SQL
                </span>
              </div>
              <h3 className="my-3 font-heading font-medium text-xl">
                Web frameworks
              </h3>
              <div className="flex gap-2 flex-wrap">
                <span className="px-2 py-1 border border-green-500 dark:border-green-800 rounded-full font-mono text-xs text-green-600 dark:text-green-500 bg-green-100 dark:bg-green-950">
                  Next.js
                </span>
                <span className="px-2 py-1 border border-green-500 dark:border-green-800 rounded-full font-mono text-xs text-green-600 dark:text-green-500 bg-green-100 dark:bg-green-950">
                  React
                </span>
                <span className="px-2 py-1 border border-green-500 dark:border-green-800 rounded-full font-mono text-xs text-green-600 dark:text-green-500 bg-green-100 dark:bg-green-950">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        </Card>
      </Section>
    </main>
  );
}
