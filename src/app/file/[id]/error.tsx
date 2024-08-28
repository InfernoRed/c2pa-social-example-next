"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations();

  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          {t("FileErrorPage.errors.415.heading")}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {t("FileErrorPage.errors.415.description")}
        </p>
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
