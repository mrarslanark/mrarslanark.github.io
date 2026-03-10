import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Arslan Mushtaq — Senior / Lead React Native Engineer",
  description:
    "I architect and scale React Native platforms in regulated industries like fintech and health-tech. 10+ years of experience, 1M+ users served.",
  keywords: [
    "React Native",
    "Mobile Engineer",
    "Lead Engineer",
    "Fintech",
    "Health-tech",
    "CI/CD",
    "Pakistan",
    "Remote",
  ],
  authors: [{ name: "Arslan Mushtaq" }],
  openGraph: {
    title: "Arslan Mushtaq — Senior / Lead React Native Engineer",
    description:
      "Architecting and scaling React Native platforms with 10+ years of experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Manrope:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
