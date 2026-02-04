import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Challenge App",
  description: "Queers & Allies Challenge Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        <NavBar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
