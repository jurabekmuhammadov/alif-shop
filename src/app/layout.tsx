"use client"
import { Inter } from "next/font/google";
import Header from "@/layout/header";
import "./globals.css";
import MobileNav from "@/components/mobile-nav";
import useProductStore from "@/store/product/productStore";
import Loader from "@/components/loader";
import metadata from "../metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { loading } = useProductStore();

  return (
    <html lang="en">
      <body className={inter.className}
        style={{ maxWidth: 1320, margin: "0 auto", padding: "0 20px" }}
      >
        {loading && <Loader />}

        <Header />
        <main>{children}</main>
        <MobileNav />
      </body>
    </html>
  );
}
