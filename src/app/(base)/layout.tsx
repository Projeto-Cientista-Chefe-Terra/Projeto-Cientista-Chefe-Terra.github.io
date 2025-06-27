import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/Footer/footer";
import BGElements from "@/components/layout/BackgroundElements/BGElements";
import FAQLink from "@/components/layout/FAQLink/faqLink";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cientista Chefe Terra",
  description: "O site oficial do projeto Cientista Chefe Terra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-lightBrown" lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased 
          lg:max-w-screen-xl mx-auto flex flex-col  bg-cor1b h-full`}
      >
        <FAQLink/>
        <Header />
        <div className="mb-20 lg:mb-0"></div>
        {children}
        <Footer />
        <BGElements/>
      </body>
    </html>
  );
}
