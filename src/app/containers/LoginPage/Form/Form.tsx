import { ChangeEvent, FormEvent } from "react";

import { loginUser } from "@/store/Auth/actions";
import { changeLoginData } from "@/store/Auth/slice";
import { useAppDispatch, useAppSelector } from "@/store/store";

import LoginButton from "./LoginButton";
import Loader from "./Loader";
import { InputType } from "@/app/components/inputs/BasicInput";
import Input from "./Input";

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
      <Input
        value={email}
        label="Email"
        name="email"
        onChange={onChange}
        inputType={InputType.EMAIL}
      />
      <Input
        value={password}
        onChange={onChange}
        inputType={InputType.PASSWORD}
        label="Hasło"
        name="password"
      />
      {!isLoading ? <LoginButton /> : <Loader />}
    </form>
  );
};

export default Form;
