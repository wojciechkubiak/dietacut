import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAppSelector } from "@/store/store";
import { AuthStatus } from "@/models/Auth";
import AnimatedOpacityWrapper from "@/app/components/wrappers/AnimatedOpacityWrapper";
import DefaultWrapper from "@/app/components/wrappers/DefaultWrapper";
import AppHeader from "@/app/components/headers/AppHeader";
import Form from "@/app/containers/RegisterPage/Form";
import BackgroundWrapper from "@/app/components/wrappers/BackgroundWrapper";
import Header from "./Header";

const RegisterPage: FC = () => {
  const router = useRouter();
  const { authStatus } = useAppSelector((state) => state.data);

  useEffect(() => {
    if (authStatus === AuthStatus.AUTHENTICATED) router.push("/");
  }, [authStatus, router]);

  return (
    <BackgroundWrapper isBackground>
      <AppHeader />
      <AnimatedOpacityWrapper>
        <DefaultWrapper externalClassName="pt-12 px-8 pb-6 mt-12 bg-white min-w-[900px] w-2/5 left-1/2 -translate-x-1/2">
          <Header />
          <Form />
        </DefaultWrapper>
      </AnimatedOpacityWrapper>
    </BackgroundWrapper>
  );
};

export default RegisterPage;
