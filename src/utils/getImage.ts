import sampleImages from "@/constants/sampleImages";

export default async function getImage(id: string) {
  const numericId = Number(id) - 1;

  if (isNaN(numericId) || numericId < 0) {
    return sampleImages[0]; // fallback
  }

  return sampleImages[numericId % sampleImages.length];
}
