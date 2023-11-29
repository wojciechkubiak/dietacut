import "./globals.css";
import React, { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter, Ephesis } from "next/font/google";
import Providers from "@/app/providers/providers";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ephesis = Ephesis({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ephesis",
});

export const metadata: Metadata = {
  title: "DietaCut",
  description: "Dieta",
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={`${inter.variable} ${ephesis.variable}`}>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
