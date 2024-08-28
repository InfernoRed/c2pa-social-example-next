import React from "react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t("NotFoundPage.metadata.title"),
    description: t("NotFoundPage.metadata.description"),
  };
}

const NotFoundPage = async () => {
  const t = await getTranslations();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">
        {t("NotFoundPage.heading")}
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        {t("NotFoundPage.description")}
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {t("NotFoundPage.homeLink")}
      </Link>
    </div>
  );
};

export default NotFoundPage;
