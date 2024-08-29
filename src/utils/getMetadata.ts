import {
  Manifest,
  ManifestStore,
  ValidationStatus,
} from "@contentauth/toolkit";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

/**
 *
 * @param status
 * @param title
 * @returns
 */
const getTitle = async (
  manifest?: Manifest,
  validationStatus?: ValidationStatus[]
) => {
  const t = await getTranslations();
  const title = manifest?.title || t("verifyMetadata.title.unknown");

  if (!manifest) {
    return t("verifyMetadata.title.missing");
  }

  // Oversimplified for demonstration purposes
  if (validationStatus && validationStatus.length > 0) {
    return t("verifyMetadata.title.invalid", { title });
  }

  return t("verifyMetadata.title.verified", { title });
};

/**
 * Example function for metadata description
 * @param manifest
 * @returns Description
 */
export const getDescription = async (manifest?: Manifest) => {
  const t = await getTranslations();
  if (!manifest) {
    return t("verifyMetadata.description.missing");
  }
  return t("verifyMetadata.description.default");
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

export default async function getMetaData(
  manifestStore?: ManifestStore,
  thumbnail?: string | URL
): Promise<Metadata> {
  const manifest = manifestStore?.manifests[manifestStore?.active_manifest];
  const validationStatus = manifestStore?.validation_status;

  const title = await getTitle(manifest, validationStatus);
  const description = await getDescription(manifest);
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
