import "server-only";

import { ManifestStore } from "@contentauth/toolkit";
import VerifyError from "@/models/VerifyError";
import { isSupportedMimeType } from "@/utils/mimeTypes";

const apiUrl = process.env.CONTENT_INTEGRITY_API_URL;

/**
 * Verify a manifest file
 * @param url Url to file to verify
 * @returns Manifest Store
 */
export const getManifestStoreByUrl = async (
  url: string,
  mimeType: string
): Promise<ManifestStore | undefined> => {
  if (!isSupportedMimeType(mimeType)) {
    throw new VerifyError(415);
  }

  const queryParams = new URLSearchParams();
  queryParams.append("url", url);
  queryParams.append("raw", "true");
  const response = await fetch(
    `${apiUrl}/verify_file?${queryParams.toString()}`
  );

  if (!response.ok) {
    return undefined;
  }

  const manifestStore: ManifestStore = await response.json();

  return manifestStore;
};
