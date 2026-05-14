import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CherasRians Athletes Pro",

  description:
    "Modern sports athlete management system for schools, coaches, and students.",

  keywords: [
    "sports management system",
    "school athlete system",
    "sports CMS",
    "CherasRians",
    "athlete management",
  ],

  verification: {
    google: "6sXvA0417Q_PNwTSR25R4D1xLDGjTWLAPs0DlsO62Xs",
  },

  openGraph: {
    title: "CherasRians Athletes Pro",

    description: "Modern sports athlete management system for schools.",

    url: "https://cherasrians.my",

    siteName: "CherasRians Athletes Pro",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
