import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Icons } from "@/components/Icons";
import { Footer } from "@/components/Footer";
import { Providers } from "@/components/Providers/Providers";
import { PageLayout } from "@/components/PageLayout";

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
        <Providers>
          <PageLayout>
            <Icons />
            <Header />
            <main>{children}</main>
            <Footer />
          </PageLayout>
        </Providers>
      </body>
    </html>
  );
}
