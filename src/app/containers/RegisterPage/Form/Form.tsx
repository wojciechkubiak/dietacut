import { ChangeEvent, FC, FormEvent, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { AiOutlinePlus } from "react-icons/ai";

import { useAppDispatch, useAppSelector } from "@/store/store";
import { registerUser } from "@/store/Auth/actions";
import { changeRegisterData } from "@/store/Auth/slice";
import BasicInput, { InputType } from "@/app/components/inputs/BasicInput";
import FormHeader from "@/app/components/headers/FormHeader";
import FormSubHeader from "@/app/components/headers/FormSubHeader";

const Form: FC = () => {
  const dispatch = useAppDispatch();
  const {
    register: registerData,
    register: {
      email,
      password,
      name,
      gender,
      weight,
      targetWeight,
      reducedKcal,
      height,
      bodyType,
      activity,
      proportions,
      proportions: { fat, proteins, carbs },
      birthday,
    },
    isLoading,
  } = useAppSelector((state) => state.data);
  const [passwordCopy, setPasswordCopy] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser(registerData));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeRegisterData({ [e.target.name]: e.target.value }));

  const onChangePasswordCopy = (e: ChangeEvent<HTMLInputElement>) =>
    setPasswordCopy(e.target.value);

  return (
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
      <div className="pt-16">
        <FormSubHeader text="Formularz" />
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
            colors={["#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981"]}
          />
        )}
      </button>
    </form>
  );
};

export default Form;
