import type { Metadata } from "next";
import {
  getValidateTitle,
  getValidationDescription,
  validate,
} from "@/utils/validation";
import ValidationDisplay from "@/components/ValidationDisplay";
import { getSample } from "@/samples/getSample";

const HEADING = "Sample Image";

interface Params {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = params;
  const sample = getSample(id);
  const status = validate({}, sample.status);
  const title = getValidateTitle(status, sample.alt);
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
          url: sample.src,
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
      images: [sample.src],
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
