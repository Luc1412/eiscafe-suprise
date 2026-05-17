import type { MetadataRoute } from "next";

const baseUrl = "https://www.eiscafe-surprise.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-05-17"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date("2026-05-17"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date("2026-05-17"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
