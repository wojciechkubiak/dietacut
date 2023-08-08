"use client";

import { PropsWithChildren } from "react";
import ReduxProvider from "./redux-provider";

const Providers = ({ children }: PropsWithChildren) => (
  <>
    <ReduxProvider>{children}</ReduxProvider>
  </>
);

export default Providers;
