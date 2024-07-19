import type { Metadata } from "next";

import artisticSample from "@/samples/artistic-sample.jpeg";
import newsSample from "@/samples/news-sample.jpg";
import scientificSample from "@/samples/scientific-sample.jpg";

import {
  getValidateTitle,
  getValidationDescription,
  validate,
} from "@/utils/validation";
import ValidationDisplay from "@/components/ValidationDisplay";

const HEADING = "Sample Image";
const ARTISTIC_ALT = "Artistic sample";

const sampleImages = [
  {
    raw: artisticSample,
    src: artisticSample.src,
    alt: "Artistic sample",
    status: "valid",
  },
  {
    raw: newsSample,
    src: newsSample.src,
    alt: "News sample",
    status: "invalid",
  },
  {
    raw: scientificSample,
    src: scientificSample.src,
    alt: "Scientific sample",
    status: "inconclusive",
  },
];

const getSample = (id: string) =>
  sampleImages[Number(id) % sampleImages.length];

interface Params {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = params;
  const sample = getSample(id);
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
      images: [
        {
          url: `https://c2pa-social-example-next.vercel.app/${sample.src}`,
          alt: sample.alt,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [`https://c2pa-social-example-next.vercel.app/${sample.src}`],
    },
  };
}

export default function Home({ params }: Params) {
  const sample = getSample(params.id);
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-4xl font-bold my-4">{`${HEADING} ${params.id}`}</h1>
      <ValidationDisplay image={{ src: sample.raw, alt: sample.alt }} />
    </main>
  );
}
