import type { MetadataRoute } from "next";

import { HOST } from "@/config/shared";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

function getAlternates(
  pathname: string,
): MetadataRoute.Sitemap[number]["alternates"] {
  return {
    languages: Object.fromEntries(
      routing.locales.map((l) => [
        l,
        HOST + getPathname({ href: pathname, locale: l }),
      ]),
    ),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.estvrtecky.com/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: getAlternates("/"),
    },
    {
      url: "https://www.estvrtecky.com/sk",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: getAlternates("/"),
    },
  ];
}
