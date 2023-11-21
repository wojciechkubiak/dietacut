import { ChangeEvent, FormEvent } from "react";

import { loginUser } from "@/store/Auth/actions";
import { changeLoginData } from "@/store/Auth/slice";
import { useAppDispatch, useAppSelector } from "@/store/store";

import BasicInput, { InputType } from "@/app/components/inputs/BasicInput";
import LoginButton from "./LoginButton";
import Loader from "./Loader";

const Form: React.FC = () => {
  const {
    login: { email, password },
    isLoading,
  } = useAppSelector((state) => state.data);
  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeLoginData({ [e.target.name]: e.target.value }));

  return (
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
      {!isLoading ? <LoginButton /> : <Loader />}
    </form>
  );
};

export default Form;
