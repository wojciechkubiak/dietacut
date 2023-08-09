"use client";
import { FC } from "react";
import { ColorRing } from "react-loader-spinner";
import { AuthStatus } from "@/models/Auth";
import FormWrapper from "@/app/components/wrappers/FormWrapper";
import useAuth from "@/app/hooks/useAuth";

const Home: FC = () => {
  const authStatus = useAuth();

  const isHomePage = authStatus === AuthStatus.AUTHENTICATED;

  return (
    <main>
      {!isHomePage && (
        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="bg-white rounded-full shadow-xl">
            <ColorRing
              visible={true}
              height="178"
              width="178"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981"]}
            />
          </div>
        </div>
      )}
      {isHomePage && (
        <FormWrapper>
          <div className="border-4 h-40 w-40 border-emerald-300 rounded-full shadow-2xl hover:scale-110 duration-200 flex items-center justify-center mb-8"></div>
        </FormWrapper>
      )}
    </main>
  );
};

export default Home;
