import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO DESCRIPTION",
  keywords: ["contact page", "Benjamin", "Next.js"],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-5xl">ContactPage</span>
    </>
  );
}
