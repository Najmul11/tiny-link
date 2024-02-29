import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import ReduxProvider from "./ReduxProvider";
import NextAuthProvider from "./NextAuthProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiny Link",
  description: "Now shortening long links becomes easier!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextAuthProvider>
      <ReduxProvider>
        <html lang="en">
          <body className={inter.className}>
            <header className="sticky w-full top-0 z-[1000]">
              <Header />
            </header>
            <main className="bg-black text-white min-h-screen">{children}</main>
            <Footer />

            <Toaster />
          </body>
        </html>
      </ReduxProvider>
    </NextAuthProvider>
  );
}
