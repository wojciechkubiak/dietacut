import "./globals.css";
import React, { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/app/providers/providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DietaCut",
  description: "Dieta",
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
