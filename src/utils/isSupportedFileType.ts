/**
 * Check if the file type is supported
 * @param mimeType
 * @returns
 */
export default function isSupportedFileType(mimeType?: string): boolean {
  return !mimeType || mimeType.startsWith("image/"); // Temporary implementation
}
