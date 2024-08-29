"use server";

import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import CAIContent from "@/components/CAIContent";
import CAISummary from "@/components/CAISummary";
import CopyLinkButton from "@/components/CopyLinkButton";
import { getManifestStoreByUrl } from "@/services/manifest";
import { getFile } from "@/services/file";
import getMetadata from "@/utils/getMetadata";

interface Params {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const file = await getFile(params.id);
  const manifestStore = await getManifestStoreByUrl(file.webContentLink);

  return await getMetadata(manifestStore, file.thumbnailLink);
}

export default async function FilePage({ params }: Params) {
  const t = await getTranslations();
  const file = await getFile(params.id);
  const manifestStore = await getManifestStoreByUrl(file.webContentLink);

  return (
    <main className="flex flex-col items-center p-24 gap-4">
      <CAIContent file={file} manifestStore={manifestStore} />
      <div className="flex flex-row items-center gap-2">
        <CopyLinkButton
          text={t("FilePage.copyLinkButton")}
          copiedText={t("FilePage.copyLinkButtonActive")}
          className="font-semibold border border-b-gray-300 min-w-[100px] gray-900 px-2 py-1 rounded-lg"
        />
        <a
          href={`https://contentintegrity.microsoft.com/check?source=${file.webContentLink}`}
          className="font-semibold border text-center border-b-gray-300 min-w-[100px] gray-900 px-2 py-1 rounded-lg"
        >
          {t("FilePage.verifyLink")}
        </a>
      </div>
      <CAISummary
        manifestStore={manifestStore}
        className="border border-b-gray-300 rounded-xl"
      />
    </main>
  );
}
