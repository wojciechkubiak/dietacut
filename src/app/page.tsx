"use client";
import { FC } from "react";

import HomePage from "@/app/containers/HomePage";
import Head from "next/head";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>DietaCut</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
