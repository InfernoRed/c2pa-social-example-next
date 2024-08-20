"use client";

import { ReactNode } from "react";
import { ManifestStore } from "@contentauth/toolkit";

import useWebComponents from "@/hooks/useWebComponents";
import useL2ManifestStore from "@/hooks/useL2ManifestStore";
import useCAISummaryRef from "@/hooks/useCAISummaryRef";

export interface CAIPopoverProps {
  className?: string;
  popoverClass?: string;
  summaryClass?: string;
  manifestStore?: ManifestStore;
  children?: ReactNode;
  disablePopover?: boolean;
}

export default function CAIPopover({
  className,
  popoverClass,
  summaryClass,
  manifestStore,
  children,
  disablePopover,
}: CAIPopoverProps) {
  useWebComponents();
  const enableManifestLogs =
    process.env.NEXT_PUBLIC_ENABLE_MANIFEST_LOGS === "true";
  const l2ManifestStore = useL2ManifestStore(manifestStore, enableManifestLogs);
  const summaryRef = useCAISummaryRef(l2ManifestStore);

  return (
    <div style={{ position: "relative" }} className={className}>
      {children}
      {l2ManifestStore && (
        <cai-popover
          style={
            !popoverClass && {
              position: "absolute",
              right: "1rem",
              top: "1rem",
              "&:hover": {
                cursor: "pointer",
              },
            }
          }
          interactive={!disablePopover}
          class={popoverClass}
        >
          <cai-indicator slot="trigger" />
          {!disablePopover && (
            <cai-manifest-summary
              class={summaryClass}
              ref={summaryRef}
              slot="content"
            />
          )}
        </cai-popover>
      )}
    </div>
  );
}
