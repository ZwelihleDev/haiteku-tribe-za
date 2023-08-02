import NavigationBar from "@/components/NavigationBar";
import "./globals.css";
import type { Metadata } from "next";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barl",
});

export const metadata: Metadata = {
  title: "Haiteku Tribe ZA",
  description: "Share amazing projects rise africans rise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} font-barl bg-graySeven`}>
        <NavigationBar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
