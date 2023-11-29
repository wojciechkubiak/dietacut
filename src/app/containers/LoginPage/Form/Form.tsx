import { FormEvent } from "react";

import { loginUser } from "@/store/Auth/actions";
import { useAppDispatch, useAppSelector } from "@/store/store";

import LoginButton from "./Submit";
import Loader from "./Loader";
import Mail from "./Mail";
import Password from "./Password";

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

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-center items-center my-10 space-y-8"
    >
      <Mail />
      <Password />
      {!isLoading ? <LoginButton /> : <Loader />}
    </form>
  );
};

export default Form;
