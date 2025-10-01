import type React from "react";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Geist } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata = {
  title: "Computing Gate | بوابة الحوسبة لتقنية المعلومات",
  description:
    "Advanced technology solutions and services - حلول وخدمات تقنية متقدمة",
  generator: "v0.app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${geistSans.variable}  antialiased`}
    >
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Providers >{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
