"use server";

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import CAIPopover from "@/components/CAIPopover";
import CAISummary from "@/components/CAISummary";
import CopyLinkButton from "@/components/CopyLinkButton";
import { getManifestStore } from "@/services/manifest";
import getMetadata from "@/utils/getMetadata";
import isSupportedFileType from "@/utils/isSupportedFileType";

interface Params {
  params: {
    id: string;
  };
}

const BASE_URL =
  process.env.NEXT_PUBLIC_VERCEL_URL || process.env.NEXT_PUBLIC_BASE_URL;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const response = await fetch(`${BASE_URL}/api/file/${params.id}`);

  const file = await response.json();
  if (!file || file.error) {
    return notFound();
  }

  if (!isSupportedFileType(file.mimeType)) {
    throw new Error("Unsupported file type", { cause: file.mimeType });
  }

  const manifestStore = await getManifestStore(
    file.webContentLink,
    file.mimeType
  );

  return getMetadata(manifestStore, file.thumbnailLink);
}

export default async function FilePage({ params }: Params) {
  const response = await fetch(`${BASE_URL}/api/file/${params.id}`);

  const file = await response.json();
  if (!file) {
    return notFound();
  }

  if (!isSupportedFileType(file.mimeType)) {
    throw new Error("Unsupported file type", { cause: file.mimeType });
  }

  const manifestStore = await getManifestStore(
    file.webContentLink,
    file.mimeType
  );

  return (
    <main className="flex flex-col items-center p-24 gap-4">
      <CAIPopover className="h-96 w-96" manifestStore={manifestStore}>
        <Image
          priority
          className="object-fit rounded-xl"
          alt={file.alt}
          src={file.webContentLink}
          fill
        />
      </CAIPopover>
      <div className="flex flex-row items-center gap-2">
        <CopyLinkButton
          text={"Copy Link"}
          copiedText={"Copied!"}
          className="font-semibold border border-b-gray-300 min-w-[100px] gray-900 px-2 py-1 rounded-lg"
        />
        <a
          href={`https://contentintegrity.microsoft.com/check?source=${file.webContentLink}`}
          className="font-semibold border text-center border-b-gray-300 min-w-[100px] gray-900 px-2 py-1 rounded-lg"
        >
          Verify
        </a>
      </div>
      <CAISummary
        manifestStore={manifestStore}
        className="border border-b-gray-300 rounded-xl"
      />
    </main>
  );
}
