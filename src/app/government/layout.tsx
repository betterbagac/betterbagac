import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/data/site.config";

export const metadata: Metadata = {
  title: "Government Officials & Structure",
  description: `Meet the leadership and offices serving ${siteConfig.municipalityName}, ${siteConfig.province}`,
};

export default function GovernmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
