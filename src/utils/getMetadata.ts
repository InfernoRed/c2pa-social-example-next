import {
  Manifest,
  ManifestStore,
  ValidationStatus,
} from "@contentauth/toolkit";
import { Metadata } from "next";

/**
 *
 * @param status
 * @param title
 * @returns
 */
const getTitle = (
  manifest?: Manifest,
  validationStatus?: ValidationStatus[]
) => {
  const title = manifest?.title || "Untitled";

  if (!manifest) {
    return "❌ Uncertified";
  }

  // Oversimplified for demonstration purposes
  if (validationStatus && validationStatus.length > 0) {
    return `⚠️ Invalid | ${title}`;
  }

  return `✅ Verified | ${title}`;
};

/**
 * Example function for metadata description
 * @param manifest
 * @returns Description
 */
export const getDescription = (manifest?: Manifest): string => {
  if (!manifest) {
    return "No manifest store found";
  }
  return "Click to learn more about this content's credentials";
};

/**
 * Example function for metadata authors using issuer
 * @param manifest
 * @returns Array of authors
 */
const getAuthors = (
  manifest?: Manifest
): { name?: string; url?: string | URL }[] => {
  const issuerName = manifest?.signature_info?.issuer;
  return issuerName ? [{ name: issuerName }] : [];
};

export default function getMetaData(
  manifestStore?: ManifestStore,
  thumbnail?: string | URL
): Metadata {
  const manifest = manifestStore?.manifests[manifestStore?.active_manifest];
  const validationStatus = manifestStore?.validation_status;

  const title = getTitle(manifest, validationStatus);
  const description = getDescription(manifest);
  const authors = getAuthors(manifest);

  return {
    title,
    description,
    authors,
    openGraph: {
      title,
      description,
      images: thumbnail,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: thumbnail,
    },
  };
}
