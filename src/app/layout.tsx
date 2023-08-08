import "./globals.css";
import React, { PropsWithChildren } from "react";
import type { Metadata } from "next";
import Body from "@/pages/Body/Body";

export const metadata: Metadata = {
  title: "Rozpiska",
  description: "Dieta",
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <Body>{children}</Body>
  </html>
);

export default RootLayout;
