import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import SmoothScroll from "./components/SmoothScroll";

import localFont from "next/font/local";

const thmanyahSans = localFont({
  src: [
    {
      path: "../../public/fonts/thmanyahsans_Light-s.p.2r8gpth1v-00-.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahsans_Regular-s.p.0o0gt2g3ym172.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahsans_Medium-s.p.1bmepgtgqpy4i.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahsans_Bold-s.p.2su9fyp37t-l0.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/thmanyahsans_Black-s.p.3y-fczom-didk.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-thmanyah",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdulrahman - Software Developer",
  description: "Backend Developer specializing in building robust software solutions using .NET, Entity Framework, and RESTful APIs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${thmanyahSans.variable} ${raleway.variable} ${thmanyahSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <SmoothScroll />
        </ThemeProvider>
      </body>
    </html>
  );
}
