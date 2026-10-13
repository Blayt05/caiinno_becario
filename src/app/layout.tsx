import type { Metadata } from "next";
import { Montserrat, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import SecondaryNavbar from "@/components/SecondaryNavbar";
import LayoutMetrics from "@/components/LayoutMetrics";

const montserrat = Montserrat({
  variable: "--font-geist-sans", // Keep the same variable name for minimal CSS changes
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono", // Keep the same variable name for minimal CSS changes
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CAIINNO",
  description: "CAIINNO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${robotoMono.variable}`}>
      <body className="antialiased">
        <LayoutMetrics/>
        <div className="snap-nav">
          <Navbar/>
        </div>
        <SecondaryNavbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}