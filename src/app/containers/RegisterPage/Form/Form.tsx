import { FC, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { registerUser } from "@/store/Auth/actions";
import ActivityLevel from "./ActivityLevel";
import Subheader from "./Subheader";
import Name from "./Name";
import Birthday from "./Birthday";
import Gender from "./Gender";
import Mail from "./Mail";
import Password from "./Password";
import Height from "./Height";
import Submit from "./Submit";
import ButtonLoader from "./ButtonLoader";
import InitialWeight from "./InitialWeight";
import CaloriesIntake from "./CaloriesIntake";
import TargetWeight from "./TargetWeight/TargetWeight";

const Form: FC = () => {
  const dispatch = useAppDispatch();
  const { register: registerData, isLoading } = useAppSelector(
    (state) => state.data
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser(registerData));
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-center items-center my-10 space-y-8"
    >
      <Mail />
      <Password />

      <Subheader />
      <Name />
      <Birthday />
      <Gender />
      <Height />
      <InitialWeight />
      <TargetWeight />
      <ActivityLevel />
      <CaloriesIntake />

      {!isLoading ? <Submit /> : <ButtonLoader />}
    </form>
  );
};

export default Form;
