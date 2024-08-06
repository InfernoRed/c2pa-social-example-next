import sampleImages, { SampleImage } from "@/constants/sampleImages";

export default async function getImage(
  id: string
): Promise<SampleImage | undefined> {
  const numericId = Number(id) - 1;

  if (isNaN(numericId) || numericId < 0 || numericId >= sampleImages.length) {
    return undefined;
  }

  return sampleImages[numericId];
}
