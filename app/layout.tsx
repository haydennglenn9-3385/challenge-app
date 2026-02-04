import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Queers & Allies Challenges",
  description: "A community-driven movement challenge platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
