import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";

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
        <NavBar />
        {children}
      </body>
    </html>
  );
}
