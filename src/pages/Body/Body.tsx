import React, { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import Providers from "@/providers/providers";

const inter = Inter({ subsets: ["latin"] });

const Body: React.FC<PropsWithChildren> = ({ children }) => (
  <body className={inter.className}>
    <Providers>{children}</Providers>
  </body>
);

export default Body;
