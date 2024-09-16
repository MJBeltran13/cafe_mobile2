"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>

        {/* Error overlay for medium and large screens */}
        <div className="fixed inset-0 hidden items-center justify-center bg-gray-900 text-lg font-bold text-white opacity-95 md:flex lg:flex">
          <p>Sorry, this feature is only available on small screens.</p>
        </div>
      </body>
    </html>
  );
}
