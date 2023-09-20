import { FC, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAppSelector } from "@/store/store";
import { AuthStatus } from "@/models/Auth";
import AnimatedOpacityWrapper from "@/app/components/wrappers/AnimatedOpacityWrapper";
import DefaultWrapper from "@/app/components/wrappers/DefaultWrapper";
import FormHeader from "@/app/components/headers/FormHeader";
import AppHeader from "@/app/components/headers/AppHeader";
import Form from "@/app/containers/RegisterPage/Form";

const RegisterPage: FC = () => {
  const router = useRouter();
  const { authStatus } = useAppSelector((state) => state.data);

  const onBackButtonClick = () => router.push("/login");

  useEffect(() => {
    if (authStatus === AuthStatus.AUTHENTICATED) router.push("/");
  }, [authStatus, router]);

  return (
    <>
      <AppHeader />
      <AnimatedOpacityWrapper>
        <DefaultWrapper externalClassName="pt-12 px-12 pb-6 mt-12">
          <FormHeader
            headerText="Rejestracja"
            onBackButtonClick={onBackButtonClick}
          >
            <p className="text-md text-gray-600 text-center mt-2 mb-12">
              Dane można edytować po założeniu konta
            </p>
          </FormHeader>
          <Form />
        </DefaultWrapper>
      </AnimatedOpacityWrapper>
    </>
  );
};

export default RegisterPage;
