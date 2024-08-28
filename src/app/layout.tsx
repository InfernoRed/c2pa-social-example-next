import { Arimo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";

import "./globals.css";

const arimo = Arimo({ subsets: ["latin"] });

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: t("DefaultPage.metadata.title"),
    description: t("DefaultPage.metadata.title"),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body style={{ height: "100vh" }} className={arimo.className}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
