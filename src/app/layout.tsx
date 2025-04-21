import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interior Design Studio",
  description: "Transform your space with our expert interior design services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col overflow-x-hidden`}>
        <Navbar />
        <main className="flex-grow w-full max-w-[100vw] overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#333',
              color: '#fff',
              padding: '16px',
              borderRadius: '8px',
            },
          }}
        />
      </body>
    </html>
  );
}
