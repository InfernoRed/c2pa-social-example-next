import "server-only";

import { notFound } from "next/navigation";

import { errorCauses } from "@/app/lib/definitions";
import { isSupportedMimeType } from "@/utils/mimeTypes";

const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : process.env.NEXT_PUBLIC_BASE_URL;

export async function getFile(id: string) {
  const response = await fetch(`${BASE_URL}/api/file/${id}`);

  const file = await response.json();

  if (!file || file.error) {
    return notFound();
  }

  if (!isSupportedMimeType(file.mimeType)) {
    throw new Error("Unsupported file type", {
      cause: errorCauses.MEDIA_UNSUPPORTED,
    });
  }

  return file;
}
