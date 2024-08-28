import React from "react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t("FileNotFoundPage.metadata.title"),
    description: t("FileNotFoundPage.metadata.description"),
  };
}

const NotFoundPage = async () => {
  const t = await getTranslations();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">
        {t("FileNotFoundPage.heading")}
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        {t("FileNotFoundPage.description")}
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {t("FileNotFoundPage.homeLink")}
      </Link>
    </div>
  );
};

export default NotFoundPage;
