"use client";

import { ChangeEvent, FC, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/store/store";
import { loginUser } from "@/store/Auth/actions";
import { changeLoginData } from "@/store/Auth/slice";
import { AuthStatus } from "@/models/Auth";
import useAuth from "@/app/hooks/useAuth";
import FormHeader from "@/app/components/headers/FormHeader";
import AnimatedOpacityWrapper from "@/app/components/wrappers/AnimatedOpacityWrapper";
import FormWrapper from "@/app/components/wrappers/FormWrapper";
import BasicInput, { InputType } from "@/app/components/inputs/BasicInput";
import { AiOutlineArrowRight } from "react-icons/ai";
import { ColorRing } from "react-loader-spinner";
import AppHeader from "@/app/components/headers/AppHeader";

const Login: FC = () => {
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

  const navigateRegister = () => router.push("/register");

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeLoginData({ [e.target.name]: e.target.value }));

  const isLoginPage = authStatus === AuthStatus.NOT_AUTHENTICATED;

  return (
    <main>
      {!isLoginPage && (
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
      {isLoginPage && (
        <>
          <AppHeader />
          <AnimatedOpacityWrapper>
            <FormWrapper externalClassName="pt-12 px-12 pb-6 mt-12">
              <FormHeader headerText="Zaloguj">
                <p className="text-md text-gray-600 text-center mt-2 mb-12">
                  Nie masz konta?{" "}
                  <span
                    onClick={navigateRegister}
                    className="text-emerald-400 cursor-pointer"
                  >
                    Stwórz!
                  </span>
                </p>
              </FormHeader>
              <form
                onSubmit={onSubmit}
                className="flex flex-col justify-center items-center my-10 space-y-8"
              >
                <div className="flex flex-col justify-center w-full px-16">
                  <BasicInput
                    value={email}
                    onChange={onChange}
                    inputType={InputType.EMAIL}
                    label="Email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col justify-center w-full px-16">
                  <BasicInput
                    value={password}
                    onChange={onChange}
                    inputType={InputType.PASSWORD}
                    label="Hasło"
                    name="password"
                  />
                </div>
                <button
                  type="submit"
                  className={`border-4 h-32 w-32 border-emerald-300 rounded-full shadow-2xl hover:scale-110 duration-200 flex items-center justify-center`}
                  disabled={isLoading}
                >
                  {!isLoading ? (
                    <AiOutlineArrowRight className="text-5xl text-emerald-500" />
                  ) : (
                    <ColorRing
                      visible={true}
                      height="128"
                      width="128"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={[
                        "#d1fae5",
                        "#a7f3d0",
                        "#6ee7b7",
                        "#34d399",
                        "#10b981",
                      ]}
                    />
                  )}
                </button>
              </form>
            </FormWrapper>
          </AnimatedOpacityWrapper>
        </>
      )}
    </main>
  );
};

export default Login;
