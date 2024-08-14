import { useState } from "react";

const COPY_DELAY = 2000;

export default function useCopyLink() {
  const [isCopied, setIsCopied] = useState(false);

  const copyLink = async () => {
    const currentUrl = window.location.href;
    try {
      await navigator.clipboard.writeText(currentUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), COPY_DELAY);
    } catch (err) {
      console.error("Failed to copy the link: ", err);
      setIsCopied(false);
    }
  };

  return { isCopied, copyLink };
}
