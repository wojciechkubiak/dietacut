import { ColorRing } from "react-loader-spinner";
import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FormEvent,
  useState,
} from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { fetchAuthToken } from "@/store/Auth/actions";
import { changeEmail, changePassword } from "@/store/Auth/slice";
import { AiOutlineArrowRight } from "react-icons/ai";

const Login: FC = () => {
  const dispatch = useAppDispatch();
  const { email, password, isLoading } = useAppSelector((state) => state.data);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchAuthToken({ email, password }));
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeEmail(e.target.value));

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changePassword(e.target.value));

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-center items-center my-10 space-y-8"
    >
      <div className="flex flex-col justify-center w-full px-20">
        <label className="text-lg text-gray-500 pb-2">Login/ Email</label>
        <input
          type="email"
          onChange={onChangeEmail}
          className="bg-gray-200 px-5 py-2 leading-2 text-xl text-gray-800"
          required
        />
      </div>
      <div className="flex flex-col justify-center w-full px-20">
        <label className="text-lg text-gray-500 pb-2">Hasło</label>
        <input
          type="password"
          onChange={onChangePassword}
          className="bg-gray-200 px-5 py-2 text-xl text-gray-800"
          required
        />
      </div>
      <p className="text-md text-gray-600">
        Nie masz konta?{" "}
        <span className="text-emerald-400 cursor-pointer">Stwórz!</span>
      </p>
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
            colors={["#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981"]}
          />
        )}
      </button>
    </form>
  );
};

export default Login;
