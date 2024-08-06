/**
 * Get blob from a path
 * @param path
 * @returns blob
 */
export default async function getBlob(blobUrl: string) {
  try {
    const url = new URL(blobUrl);
    const media = await fetch(url);
    return await media.blob();
  } catch (error) {
    throw new Error(`Could not retrieve blob`);
  }
}
