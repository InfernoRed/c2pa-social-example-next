import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import CrPin from "@/assets/cr-pin.svg";
import artisticSample from "@/samples/artistic-sample.jpeg";
import {
  getValidateTitle,
  getValidationDescription,
  validate,
} from "@/utils/validation";

const artisticSampleAlt = "Artistic sample";

export async function generateMetadata(): Promise<Metadata> {
  const status = validate({}, "valid");
  const title = getValidateTitle(status, artisticSampleAlt);
  const description = getValidationDescription(status);

  return {
    title: title,
    description: description,
    authors: [{ name: "Microsoft", url: "https://microsoft.com" }],
    openGraph: {
      title: title,
      description: description,
      images: [{ url: artisticSample.src, alt: artisticSampleAlt }],
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
      <h1 className="text-4xl font-bold my-4">Summary Card - Large</h1>
      <div className="group relative aspect-square">
        <Image
          priority
          className="h-full w-full rounded-xl object-cover lg:rounded-[20px]"
          alt={artisticSampleAlt}
          src={artisticSample}
        />
        <CrPin className="absolute right-4 top-4 h-[24px] w-[24px] hover:cursor-pointer" />
      </div>
    </main>
  );
}
