import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VinFast - Tương lai di chuyển xanh",
  description: "Khám phá các dòng xe điện thông minh của VinFast. Thiết kế thời thượng, công nghệ đỉnh cao.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`scroll-smooth ${montserrat.variable}`}>
      <body className="font-montserrat antialiased min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
