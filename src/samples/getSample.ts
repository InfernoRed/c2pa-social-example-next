import { StaticImageData } from "next/image";
import { ValidationStatus } from "@/utils/validation";

import artisticSample from "@/samples/artistic-sample.jpeg";
import newsSample from "@/samples/news-sample.jpg";
import scientificSample from "@/samples/scientific-sample.jpg";

const sampleImages: {
  raw: StaticImageData;
  src: string;
  alt: string;
  status: ValidationStatus;
}[] = [
  {
    raw: artisticSample,
    src: artisticSample.src,
    alt: "A roaring fire",
    status: "valid",
  },
  {
    raw: newsSample,
    src: newsSample.src,
    alt: "A smoking hillside",
    status: "invalid",
  },
  {
    raw: scientificSample,
    src: scientificSample.src,
    alt: "Charming penguins in Antarctica",
    status: "inconclusive",
  },
];

export const getSample = (id: string) => {
  const numericId = Number(id) - 1;

  if (isNaN(numericId) || numericId < 0) {
    return sampleImages[0]; // fallback
  }

  return sampleImages[numericId % sampleImages.length];
};
