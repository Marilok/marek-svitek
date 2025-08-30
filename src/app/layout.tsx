import type { Metadata } from "next";
import "./globals.css";

import "@mantine/core/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Marek Svitek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="06372fab-69d1-49df-9891-19417b71f25c"
        />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
