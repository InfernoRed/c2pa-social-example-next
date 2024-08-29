"use client";

import Image from "next/image";
import { ManifestStore } from "@contentauth/toolkit";

import { GoogleDriveFile } from "@/app/lib/definitions";
import CAIPopover from "@/components/CAIPopover";
import { isImage } from "@/utils/mimeTypes";

export interface CAIContentProps {
  file: GoogleDriveFile;
  manifestStore?: ManifestStore;
}

export default function CAIContent({ file, manifestStore }: CAIContentProps) {
  if (!isImage(file.mimeType)) {
    return null;
  }

  return (
    <CAIPopover disablePopover manifestStore={manifestStore}>
      <Image
        priority
        className="object-fit rounded-xl"
        alt={file.description}
        src={file.webContentLink}
        height={file.imageMediaMetadata.height}
        width={file.imageMediaMetadata.width}
      />
    </CAIPopover>
  );
}
