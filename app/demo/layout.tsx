import type { Metadata } from "next";
import { generatePageMetadata } from "../../lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Request a Demo",
  description: "Schedule a demo to see how Jiffy transforms institutional knowledge into instant, accurate answers.",
  path: "/demo",
});

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
