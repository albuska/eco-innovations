import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Icons } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Eco Innovations",
  description: "Eco Innovations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className="font-montserrat">
        <Icons />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
