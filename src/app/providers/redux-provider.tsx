"use client";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { store } from "@/store/store";

const ReduxProvider = ({ children }: PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
