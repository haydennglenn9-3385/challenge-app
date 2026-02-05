import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/components/Header";

export const metadata = {
  title: "Challenge App",
  description: "Track your challenges",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1 max-w-xl mx-auto w-full px-6 py-6">
          {children}
        </main>
      </body>
    </html>
  );
}
