'use client';
import { Roboto } from "next/font/google";
import Header from "@/layout/header";
import "./globals.css";
import MobileNav from "@/components/mobile-nav";
import useProductStore from "@/store/product/productStore";
import Loader from "@/components/loader";
import metadata from "../metadata";
import Footer from "@/layout/footer";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { loading } = useProductStore();

  return (
    <html lang="en">
      <body className={roboto.className}>
        {loading && <Loader />}
        <Header />
        <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 20px" }}>
          <main>{children}</main>
          <MobileNav />
        </div>
        <Footer />
      </body>
    </html>
  );
}
