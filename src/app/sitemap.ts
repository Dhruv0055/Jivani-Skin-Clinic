import { MetadataRoute } from "next";
import { clinicData } from "@/data/clinic";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jivaniskinclinic.com";

  // Treatment subpages
  const treatmentUrls = clinicData.treatments.map((treatment) => ({
    url: `${baseUrl}/treatments/${treatment.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...treatmentUrls,
  ];
}
