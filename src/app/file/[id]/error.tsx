"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

import VerifyError, { getCode } from "@/models/VerifyError";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations();

  const code = getCode(error as VerifyError);

  const content = {
    heading: t(`FileErrorPage.errors.${code}.heading`),
    description: t(`FileErrorPage.errors.${code}.description`),
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          {content.heading}
        </h1>
        <p className="text-xl text-gray-600 mb-8">{content.description}</p>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {t("FileErrorPage.homeLink")}
        </Link>
      </div>
    </div>
  );
}
