"use client";
import { FC, FormEvent } from "react";
import Login from "../pages/Forms/Login";
import Body from "@/pages/Body/Body";

const Home: FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative w-1/2 min-w-[500px] bg-white shadow-2xl rounded-xl pt-12 px-12 mt-12">
        <h1 className="font-bold text-7xl text-gray-700 text-center">
          Rozpiska
        </h1>
        <p className="text-center text-sm text-gray-500 mt-1">
          Stworzona z FatSecret Platform API
        </p>
        <Login />
      </div>
    </main>
  );
};

export default Home;
