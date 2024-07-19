import type { Metadata } from "next";

import artisticSample from "@/samples/artistic-sample.jpeg";
import {
  getValidateTitle,
  getValidationDescription,
  validate,
} from "@/utils/validation";
import ValidationDisplay from "@/components/ValidationDisplay";

const HEADING = "Summary Card - Large";
const ARTISTIC_ALT = "Artistic sample";

export async function generateMetadata(): Promise<Metadata> {
  const status = validate({}, "valid");
  const title = getValidateTitle(status, ARTISTIC_ALT);
  const description = getValidationDescription(status);

  return {
    title: title,
    description: description,
    authors: [{ name: "Microsoft", url: "https://microsoft.com" }],
    openGraph: {
      title: title,
      description: description,
      images: [{ url: artisticSample.src, alt: ARTISTIC_ALT }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [artisticSample.src],
    },
  };
}

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-4xl font-bold my-4">{HEADING}</h1>
      <ValidationDisplay image={{ src: artisticSample, alt: ARTISTIC_ALT }} />
    </main>
  );
}
