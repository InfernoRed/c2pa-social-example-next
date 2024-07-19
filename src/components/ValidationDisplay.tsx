"use client";
// This demonstrates how components could be client side while the server process the image

import Image from "next/image";
import CrPin from "@/assets/cr-pin.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ValidationDisplayProps {
  image: {
    src: string | StaticImport;
    alt: string;
  };
}

export default function ValidationDisplay({ image }: ValidationDisplayProps) {
  return (
    <div className="group relative aspect-square">
      <Image
        priority
        className="h-full w-full rounded-xl object-cover lg:rounded-[20px]"
        alt={image.alt}
        src={image.src}
      />
      <CrPin className="absolute right-4 top-4 h-[24px] w-[24px] hover:cursor-pointer" />
    </div>
  );
}
