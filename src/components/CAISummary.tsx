"use client";

import { ManifestStore } from "@contentauth/toolkit";

import useWebComponents from "@/hooks/useWebComponents";
import useL2ManifestStore from "@/hooks/useL2ManifestStore";
import useCAISummaryRef from "@/hooks/useCAISummaryRef";

export interface CAISummaryProps {
  className?: string;
  summaryClass?: string;
  manifestStore?: ManifestStore;
}

export default function CAISummary({
  className,
  summaryClass,
  manifestStore,
}: CAISummaryProps) {
  useWebComponents();
  const l2ManifestStore = useL2ManifestStore(manifestStore);
  const summaryRef = useCAISummaryRef(l2ManifestStore);

  return (
    <div className={className}>
      {l2ManifestStore && (
        <cai-manifest-summary class={summaryClass} ref={summaryRef} />
      )}
    </div>
  );
}
