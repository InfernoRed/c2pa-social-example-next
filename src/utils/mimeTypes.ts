import { MimeTypeFilter } from "@/app/lib/definitions";

const MIME_TYPES = process.env.CONTENT_INTEGRITY_MIME_TYPES.split(",") || [];

/**
 * Get all supported mime types based on the filter
 * @param typeFilter filter
 * @returns array of supported mime types
 */
export function getSupportedMimeTypes(typeFilter?: MimeTypeFilter): string[] {
  return MIME_TYPES.filter(
    (mimeType) => !typeFilter || mimeType.startsWith(typeFilter)
  );
}

/**
 * Check if the mime type is supported
 * @param mimeType
 * @returns supported
 */
export function isSupportedMimeType(mimeType?: string): boolean {
  return !!mimeType && MIME_TYPES.includes(mimeType);
}
