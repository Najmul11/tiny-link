import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header className="sticky w-full top-0 z-[1000]">
        <Header />
      </header>
      <main className="bg-black text-white min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
