import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import CAIPopover from "@/components/CAIPopover";
import CAISummary from "@/components/CAISummary";
import CopyLinkButton from "@/components/CopyLinkButton";
import { getManifestStore } from "@/services/manifest";
import getImage from "@/utils/getImage";
import getMetadata from "@/utils/getMetadata";

interface Params {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const image = await getImage(params.id);
  if (!image) {
    return notFound();
  }
  const manifestStore = await getManifestStore(image.src, image.mimeType);
  return getMetadata(manifestStore, image.src);
}

export default async function Home({ params }: Params) {
  const image = await getImage(params.id);
  if (!image) {
    return notFound();
  }
  const manifestStore = await getManifestStore(image.src, image.mimeType);

  return (
    <main className="flex flex-col items-center p-24 gap-4">
      <CAIPopover className="h-96 w-96" manifestStore={manifestStore}>
        <Image
          priority
          className="object-fit rounded-xl"
          alt={image.alt}
          src={image.src}
          fill
        />
      </CAIPopover>
      <div>
        <CopyLinkButton
          text={"Copy Link"}
          copiedText={"Copied!"}
          style={{ fontFamily: "__Inter_36bd41" }}
          className="border border-b-gray-300 min-w-[120px] text-black px-4 py-2 rounded-lg"
        />
      </div>
      <CAISummary
        manifestStore={manifestStore}
        className="border border-b-gray-300 rounded-xl"
      />
    </main>
  );
}
