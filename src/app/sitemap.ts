import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.estvrtecky.com/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://www.estvrtecky.com/",
          sk: "https://www.estvrtecky.com/sk",
        },
      },
    },
    {
      url: "https://www.estvrtecky.com/sk",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://www.estvrtecky.com/",
          sk: "https://www.estvrtecky.com/sk",
        },
      },
    },
  ];
}
