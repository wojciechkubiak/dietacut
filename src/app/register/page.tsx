"use client";

import { ColorRing } from "react-loader-spinner";
import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FormEvent,
  useEffect,
  useState,
} from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { registerUser } from "@/store/Auth/actions";
import { changeRegisterData } from "@/store/Auth/slice";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import AnimatedOpacityWrapper from "@/app/components/wrappers/AnimatedOpacityWrapper";
import FormWrapper from "@/app/components/wrappers/FormWrapper";
import FormHeader from "@/app/components/headers/FormHeader";
import { useRouter } from "next/navigation";
import useAuth from "@/app/hooks/useAuth";
import { AuthStatus } from "@/models/Auth";
import BasicInput, { InputType } from "@/app/components/inputs/BasicInput";

const Register: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    auth: { authStatus },
    register: {
      email,
      password,
      weight,
      targetWeight,
      height,
      proportions,
      proportions: { fat, proteins, carbs },
      bodyType,
      birthday,
    },
    isLoading,
  } = useAppSelector((state) => state.data);
  const [passwordCopy, setPasswordCopy] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      registerUser({
        email,
        password,
        weight,
        targetWeight,
        height,
        proportions,
        bodyType,
        birthday,
      }),
    );
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeRegisterData({ [e.target.name]: e.target.value }));

  const onChangePasswordCopy = (e: ChangeEvent<HTMLInputElement>) =>
    setPasswordCopy(e.target.value);

  const onBackButtonClick = () => router.push("/login");

  useEffect(() => {
    if (authStatus === AuthStatus.AUTHENTICATED) router.push("/");
  }, [authStatus]);

  return (
    <>
      <FormHeader />
      <AnimatedOpacityWrapper>
        <FormWrapper>
          <button type="button" onClick={onBackButtonClick}>
            <AiOutlineArrowLeft className="text-3xl text-gray-700" />
          </button>
          <h1 className="font-bold text-7xl text-gray-700 text-center">
            Rejestracja
          </h1>
          <p className="text-md text-gray-600 text-center mt-2 mb-12">
            Dane można edytować po założeniu konta
          </p>
          <form
            onSubmit={onSubmit}
            className="flex flex-col justify-center items-center my-10 space-y-8"
          >
            <div className="flex flex-col justify-center w-full px-16">
              <BasicInput
                value={email}
                onChange={onChange}
                inputType={InputType.PASSWORD}
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
            <div className="flex flex-col justify-center w-full px-16">
              <BasicInput
                value={passwordCopy}
                onChange={onChangePasswordCopy}
                inputType={InputType.PASSWORD}
                label="Powtórz hasło"
                name="passwordCopy"
              />
            </div>
            <button
              type="submit"
              className={`border-4 h-32 w-32 border-emerald-300 rounded-full shadow-2xl hover:scale-110 duration-200 flex items-center justify-center`}
              disabled={isLoading}
            >
              {!isLoading ? (
                <AiOutlinePlus className="text-5xl text-emerald-500" />
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
  );
};

export default Register;
