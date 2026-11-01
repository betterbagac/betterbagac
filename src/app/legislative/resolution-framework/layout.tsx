import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/data/site.config";

export const metadata: Metadata = {
  title: "Resolution Framework",
  description: `Browse resolutions passed by the Sangguniang Bayan of ${siteConfig.municipalityName}, ${siteConfig.province}.`,
};

export default function ResolutionFrameworkLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
