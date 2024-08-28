import { ManifestStore } from "@contentauth/toolkit";
import {
  createManifestStore,
  createL2ManifestStore,
  L2ManifestStore,
} from "c2pa";
import { useEffect, useState } from "react";

export default function useL2ManifestStore(
  manifestStore?: ManifestStore
): L2ManifestStore | undefined {
  const [l2ManifestStore, setL2ManifestStore] = useState<
    L2ManifestStore | undefined
  >();

  useEffect(() => {
    const convertManifest = async (store: ManifestStore) => {
      const c2paManifestStore = createManifestStore(store);
      const l2ManifestStore = await createL2ManifestStore(c2paManifestStore);
      if (l2ManifestStore) {
        const { manifestStore } = l2ManifestStore;
        setL2ManifestStore(manifestStore);
        l2ManifestStore.dispose();
      }
    };

    if (manifestStore) {
      convertManifest(manifestStore);
    }
  }, [manifestStore]);

  return l2ManifestStore;
}
