import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kanayalalkhatri.github.io/kk-group/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
