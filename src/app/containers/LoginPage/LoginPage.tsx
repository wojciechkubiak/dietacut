import { ChangeEvent, FC, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ColorRing } from "react-loader-spinner";
import { AiOutlineCheck } from "react-icons/ai";

import { AuthStatus } from "@/models/Auth";
import { loginUser } from "@/store/Auth/actions";
import { changeLoginData } from "@/store/Auth/slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import useAuth from "@/app/hooks/useAuth";
import AnimatedOpacityWrapper from "@/app/components/wrappers/AnimatedOpacityWrapper";
import DefaultWrapper from "@/app/components/wrappers/DefaultWrapper";
import BasicInput, { InputType } from "@/app/components/inputs/BasicInput";
import AppHeader from "@/app/components/headers/AppHeader";
import BackgroundWrapper from "@/app/components/wrappers/BackgroundWrapper";
import Loader from "./Loader";
import Header from "./Header";

const LoginPage: FC = () => {
  const { authStatus } = useAuth();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    login: { email, password },
    isLoading,
  } = useAppSelector((state) => state.data);

  useEffect(() => {
    if (authStatus === AuthStatus.AUTHENTICATED) router.push("/");
  }, [authStatus, router]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeLoginData({ [e.target.name]: e.target.value }));

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
              </DefaultWrapper>
            </AnimatedOpacityWrapper>
          </>
        )}
      </BackgroundWrapper>
    </main>
  );
};

export default LoginPage;
