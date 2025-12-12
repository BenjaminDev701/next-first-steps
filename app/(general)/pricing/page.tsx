import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO DESCRIPTION",
  keywords: ["Pricing page", "Benjamin", "Next.js"],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-5xl">PricingPage</span>
    </>
  );
}
