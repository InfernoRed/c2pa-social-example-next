"use client";

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useEffect, useRef } from "react";
import { L2ManifestStore } from "c2pa";
import { ManifestSummary } from "c2pa-wc/dist/components/ManifestSummary";

export interface ValidationDisplayProps {
  image: {
    src: string | StaticImport;
    alt: string;
  };
}

const importWebComponents = () => {
  if (window !== undefined) {
    import("c2pa-wc/dist/components/Icon");
    import("c2pa-wc/dist/components/Indicator");
    import("c2pa-wc/dist/components/ManifestSummary");
    import("c2pa-wc/dist/components/PanelSection");
    import("c2pa-wc/dist/components/Popover");
  }
};

export default function ValidationDisplay({ image }: ValidationDisplayProps) {
  const summaryRef = useRef<ManifestSummary>();

  useEffect(() => {
    const manifestStore: L2ManifestStore = {
      title: "Example",
      signature: {
        issuer: "John Doe",
        isoDateString: "2024-07-01",
      },
    } as L2ManifestStore;

    importWebComponents();

    const summaryElement = summaryRef.current;
    if (summaryElement && manifestStore) {
      summaryElement.manifestStore = manifestStore;
    }
  }, [summaryRef]);

  return (
    <div className="group relative">
      <Image
        priority
        className="h-full w-full rounded-xl object-cover lg:rounded-[20px]"
        alt={image.alt}
        src={image.src}
      />
      <cai-popover
        interactive
        class="absolute right-4 top-4 hover:cursor-pointer"
      >
        <cai-indicator slot="trigger" />
        <cai-manifest-summary ref={summaryRef} slot="content" />
      </cai-popover>
    </div>
  );
}
