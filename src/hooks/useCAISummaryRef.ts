import { L2ManifestStore } from "c2pa";
import { ManifestSummary } from "c2pa-wc";
import { useEffect, useRef } from "react";

export default function useCAISummaryRef(manifestStore?: L2ManifestStore) {
  const summaryRef = useRef<ManifestSummary>();

  useEffect(() => {
    const summaryElement = summaryRef.current;
    if (summaryElement && manifestStore) {
      summaryElement.manifestStore = manifestStore;
    }
  }, [manifestStore]);

  return summaryRef;
}
