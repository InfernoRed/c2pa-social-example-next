"use client";

import { errorCauses } from "@/app/lib/definitions";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const content =
    error.cause === errorCauses.MEDIA_UNSUPPORTED
      ? { code: 415, text: "Unsupported Media Type" }
      : { code: 500, text: "Internal Server Error" };
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          {content.code}
        </h1>
        <p className="text-xl text-gray-600 mb-8">{content.text}</p>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
