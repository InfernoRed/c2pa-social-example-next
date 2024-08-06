// Server Only

import { ManifestStore } from "@contentauth/toolkit";
import getBlob from "@/utils/getBlob";

const apiUrl = process.env.CONTENT_INTEGRITY_API_URL;

/**
 * Verify a manifest file
 * @param file File to verify
 * @param contentType Content type of the file
 * @returns Manifest Store or null
 */
const verifyManifest = async (
  file: File | Blob,
  contentType: string
): Promise<ManifestStore> => {
  const response = await fetch(`${apiUrl}/verify`, {
    method: "POST",
    headers: {
      "Content-Type": contentType,
    },
    body: file,
  });

  if (!response.ok) {
    throw new Error(`Verify - ${response.status}`);
  }

  const manifestStore: ManifestStore = await response.json();

  return manifestStore;
};

/**
 * Get the manifest store for a specific media file
 * @param path Path to media file
 * @returns
 */
export const getManifestStore = async (
  path: string,
  mimeType: string
): Promise<ManifestStore | undefined> => {
  try {
    const blob = await getBlob(path);
    return await verifyManifest(blob, mimeType);
  } catch (error) {
    console.error("Error:", error);
    return undefined;
  }
};
