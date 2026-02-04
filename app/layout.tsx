import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Queers & Allies Challenges",
  description: "Gamified fitness challenges for the community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
