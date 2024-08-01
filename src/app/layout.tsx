import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Khizar Kamal | Portfolio",
  description: "Portfolio created uisng Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} scroll-smooth`}>
        <main className="px-4 py-4 max-w-5xl mx-auto">
          <Navbar />
          <section>{children}</section>
          <Footer />
        </main>
      </body>
    </html>
  );
}
