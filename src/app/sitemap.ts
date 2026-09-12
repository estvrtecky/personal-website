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

function getPathnameUrls(
  pathname: string,
  freq?: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority?: MetadataRoute.Sitemap[number]["priority"],
): MetadataRoute.Sitemap {
  return routing.locales.map((l) => {
    return {
      url: HOST + getPathname({ href: pathname, locale: l }),
      lastModified: new Date(),
      changeFrequency: freq,
      priority,
      alternates: getAlternates(pathname),
    };
  });
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [getPathnameUrls("/", "weekly", 1)].flat();
}
