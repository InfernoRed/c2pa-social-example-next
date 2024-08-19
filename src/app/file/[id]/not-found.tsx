import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "❓ File Not Found",
  description: "Sorry, this file cannot be found.",
};

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        Sorry, this file cannot be found.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go back home
      </Link>
    </div>
  );
};

export default NotFoundPage;
