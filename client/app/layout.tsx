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
  title: "Shortyy - Shorten your links",
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
            <main className="bg-black text-white ">{children}</main>

            <Toaster />
          </body>
        </html>
      </ReduxProvider>
    </NextAuthProvider>
  );
}
