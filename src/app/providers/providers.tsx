"use client";

import { PropsWithChildren } from "react";

import ReduxProvider from "@/app/providers/redux-provider";

const Providers = ({ children }: PropsWithChildren) => (
  <ReduxProvider>{children}</ReduxProvider>
);

export default Providers;
