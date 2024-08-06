import { ManifestStore } from "@contentauth/toolkit";
import {
  createManifestStore,
  createL2ManifestStore,
  L2ManifestStore,
} from "c2pa";
import { useEffect, useState } from "react";

export default function useL2ManifestStore(
  manifestStore?: ManifestStore,
  logsEnabled?: boolean
): L2ManifestStore | undefined {
  const [l2ManifestStore, setL2ManifestStore] = useState<
    L2ManifestStore | undefined
  >();

  useEffect(() => {
    const convertManifest = async (store: ManifestStore) => {
      logsEnabled &&
        console.info("ManifestStore from @content-auth/toolkit", store);

      const c2paManifestStore = createManifestStore(store);
      logsEnabled &&
        console.info("ManifestStore from c2pa-js", c2paManifestStore);

      const l2ManifestStore = await createL2ManifestStore(c2paManifestStore);
      if (l2ManifestStore) {
        const { manifestStore } = l2ManifestStore;
        logsEnabled &&
          console.info("L2ManifestStore from c2pa-js", manifestStore);
        setL2ManifestStore(manifestStore);
        l2ManifestStore.dispose();
      }
    };

    if (manifestStore) {
      convertManifest(manifestStore);
    }
  }, [manifestStore, logsEnabled]);

  return l2ManifestStore;
}
