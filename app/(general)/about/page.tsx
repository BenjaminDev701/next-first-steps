import { Metadata } from "next";

//*
export const metadata: Metadata = {
  title: "About",
  description: "SEO DESCRIPTION",
  keywords: ["about page", "Benjamin", "Next.js"],
};

export default function AboutPage() {
  return <span className="text-5xl">AboutPage</span>;
}
