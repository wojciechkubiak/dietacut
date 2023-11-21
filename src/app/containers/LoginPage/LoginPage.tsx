import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { AuthStatus } from "@/models/Auth";
import useAuth from "@/app/hooks/useAuth";
import AnimatedOpacityWrapper from "@/app/components/wrappers/AnimatedOpacityWrapper";
import DefaultWrapper from "@/app/components/wrappers/DefaultWrapper";
import AppHeader from "@/app/components/headers/AppHeader";
import BackgroundWrapper from "@/app/components/wrappers/BackgroundWrapper";
import Loader from "./Loader";
import Header from "./Header";
import Form from "./Form";

const LoginPage: React.FC = () => {
  const { authStatus } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (authStatus === AuthStatus.AUTHENTICATED) router.push("/");
  }, [authStatus, router]);

  const isLoginPage = authStatus === AuthStatus.NOT_AUTHENTICATED;

  return (
    <main>
      <BackgroundWrapper
        externalClassName={isLoginPage ? "bg-indigo-300" : "bg-white"}
      >
        {!isLoginPage && <Loader />}
        {isLoginPage && (
          <>
            <AppHeader />
            <AnimatedOpacityWrapper>
              <DefaultWrapper externalClassName="pt-12 px-8 pb-6 mt-12 bg-white min-w-[900px] w-2/5 left-1/2 -translate-x-1/2">
                <Header />
                <Form />
              </DefaultWrapper>
            </AnimatedOpacityWrapper>
          </>
        )}
      </BackgroundWrapper>
    </main>
  );
};

export default LoginPage;
