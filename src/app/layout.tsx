import { Geist, Geist_Mono } from "next/font/google";
import YandexMetrika from "@components/YandexMetrika/YandexMEtrika";
import "@styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  icons: {
    icon: [
      { rel: "icon", type: "image/svg+xml", url: "/favicon/favicon.svg" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        url: "/favicon/favicon-96x96.png",
      },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <header>
          <nav>
            <Header />
          </nav>
        </header> */}
        <Header />
        <main>{children}</main>
        <YandexMetrika />
        <Footer />
      </body>
    </html>
  );
}
