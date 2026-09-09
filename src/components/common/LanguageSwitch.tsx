"use client";

import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function handleLanguageChange(locale: string) {
    router.replace(pathname, { locale: locale });
  }

  return (
    <div className="space-x-1 p-1 rounded-lg bg-bg inset-shadow-xs">
      <button
        onClick={() => handleLanguageChange("en")}
        className={`${locale === "en" ? "border-(--border) bg-(--bg-light) shadow-xs" : "border-transparent"} px-1 py-0.5 border hover:border-(--border) rounded hover:bg-(--bg-light) hover:shadow-xs transition duration-300 cursor-pointer`}>
        EN
      </button>
      <button
        onClick={() => handleLanguageChange("sk")}
        className={`${locale === "sk" ? "border-(--border) bg-(--bg-light) shadow-xs" : "border-transparent"} px-1 py-0.5 border hover:border-(--border) rounded hover:bg-(--bg-light) hover:shadow-xs transition duration-300 cursor-pointer`}>
        SK
      </button>
    </div>
  );
}
