import { useEffect } from "react";

import hasWindow from "@/utils/hasWindow";

/**
 * Lazy load the web components from the c2pa-wc package
 * resolving issues with SSR
 */
export default function useWebComponents() {
  useEffect(() => {
    if (hasWindow()) {
      import("c2pa-wc/dist/components/Icon");
      import("c2pa-wc/dist/components/Indicator");
      import("c2pa-wc/dist/components/ManifestSummary");
      import("c2pa-wc/dist/components/PanelSection");
      import("c2pa-wc/dist/components/Popover");
    }
  }, []);
}
