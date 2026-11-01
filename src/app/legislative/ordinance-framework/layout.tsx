import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/data/site.config";

export const metadata: Metadata = {
  title: "Ordinance Framework",
  description: `Browse municipal ordinances enacted by the Sangguniang Bayan of ${siteConfig.municipalityName}, ${siteConfig.province}.`,
};

export default function OrdinanceFrameworkLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
