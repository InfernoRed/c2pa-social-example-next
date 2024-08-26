"use client";

import Image from "next/image";
import { ManifestStore } from "@contentauth/toolkit";

import CAIPopover from "@/components/CAIPopover";
import { isImage } from "@/utils/mimeTypes";
import { GoogleDriveFile } from "@/app/lib/definitions";

export interface CAIContentProps {
  file: GoogleDriveFile;
  manifestStore: ManifestStore;
}

export default function CAIContent({ file, manifestStore }: CAIContentProps) {
  if (isImage(file.mimeType)) {
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
  return <div>Unsupported Media</div>;
}
