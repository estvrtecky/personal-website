import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelopeOpen,
} from "react-icons/fa6";

export default function Footer() {
  const t = useTranslations("common.footer");

  // Copyright year
  const startYear = 2026;
  const currentYear = new Date().getFullYear();
  const displayYear =
    startYear === currentYear ? startYear : `${startYear} - ${currentYear}`;

  return (
    <footer className="p-4 md:px-8 py-12 border-t border-(--border) bg-(--bg)">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 sm:mb-4 text-fg-muted">
          <Link
            href="/"
            className="font-mono text-green-600 dark:text-green-500">
            estvrtecky
          </Link>
          <div className="flex gap-4 text-xl">
            <Link
              href="https://www.github.com/estvrtecky"
              target="_blank">
              <FaGithub
                aria-hidden
                className="hover:text-fg transition"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/estvrtecky/"
              target="_blank">
              <FaLinkedin
                aria-hidden
                className="hover:text-fg transition"
              />
            </Link>
            <Link
              href="https://www.instagram.com/estvrtecky"
              target="_blank">
              <FaInstagram
                aria-hidden
                className="hover:text-fg transition"
              />
            </Link>
            <Link href="mailto:contact@estvrtecky.com">
              <FaRegEnvelopeOpen
                aria-hidden
                className="text-lg hover:text-fg transition"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-1 pt-6 sm:pt-4 border-t border-(--border) font-mono text-xs text-center text-fg-muted">
          <p>&copy; {displayYear} Erik Štvrtecký</p>
          <p>{t("signature")}</p>
        </div>
      </div>
    </footer>
  );
}
