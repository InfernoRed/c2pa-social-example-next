"use client";

import useCopyLink from "@/hooks/useCopyLink";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export type CopyLinkButtonProps = {
  copiedText?: ReactNode;
  text?: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export default function CopyLinkButton({
  text,
  copiedText,
  ...props
}: CopyLinkButtonProps) {
  const { isCopied, copyLink } = useCopyLink();

  return (
    <button {...props} disabled={props.disabled && isCopied} onClick={copyLink}>
      {isCopied ? copiedText : props.children || text}
    </button>
  );
}
