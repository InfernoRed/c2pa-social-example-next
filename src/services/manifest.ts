import "server-only";

import { ManifestStore } from "@contentauth/toolkit";

const apiUrl = process.env.CONTENT_INTEGRITY_API_URL;

/**
 * Verify a manifest file
 * @param url Url to file to verify
 * @returns Manifest Store
 */
export const getManifestStoreByUrl = async (
  url: string
): Promise<ManifestStore> => {
  const queryParams = new URLSearchParams();
  queryParams.append("url", url);
  queryParams.append("raw", "true");
  const response = await fetch(
    `${apiUrl}/verify_file?${queryParams.toString()}`
  );

  if (!response.ok) {
    throw new Error(`Verify URL - ${response.status}`);
  }

  const manifestStore: ManifestStore = await response.json();

  return manifestStore;
};
