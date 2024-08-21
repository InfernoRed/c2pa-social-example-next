"use client";

import Image from "next/image";
import { ManifestStore } from "@contentauth/toolkit";

import CAIPopover from "@/components/CAIPopover";

export interface CAIContentProps {
  file: any;
  manifestStore: ManifestStore;
}

export default function CAIContent({ file, manifestStore }: CAIContentProps) {
  if (file.mimeType.startsWith("video")) {
    return (
      <CAIPopover manifestStore={manifestStore}>
        <video width={600} preload="auto" controls>
          <source src={file.webContentLink} type={file.mimeType} />
        </video>
      </CAIPopover>
    );
  }
  if (file.mimeType.startsWith("audio")) {
    return <audio className="object-fit rounded-xl" controls />;
  }
  if (file.mimeType.startsWith("image")) {
    return (
      <CAIPopover className="h-96 w-96" manifestStore={manifestStore}>
        <Image
          priority
          className="object-fit rounded-xl"
          alt={file.alt}
          src={file.webContentLink}
          fill
        />
      </CAIPopover>
    );
  }
  return <div className="">Unsupported Media</div>;
}
