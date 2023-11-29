import { ChangeEvent, useState } from "react";

import BasicInput, { InputType } from "@/app/components/inputs/BasicInput";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { changeRegisterData } from "@/store/Auth/slice";

const Password: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    login: { password },
    isLoading,
  } = useAppSelector((state) => state.data);
  const [passwordCopy, setPasswordCopy] = useState("");

  const onChangePasswordCopy = (e: ChangeEvent<HTMLInputElement>) =>
    setPasswordCopy(e.target.value);

  return (
    <>
      <div className="flex flex-col justify-center w-full px-16">
        <BasicInput
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            dispatch(changeRegisterData({ password: e.target.value }))
          }
          inputType={InputType.PASSWORD}
          label="Hasło"
          name="password"
          isDisabled={isLoading}
        />
      </div>

      <div className="flex flex-col justify-center w-full px-16">
        <BasicInput
          value={passwordCopy}
          onChange={onChangePasswordCopy}
          inputType={InputType.PASSWORD}
          label="Powtórz hasło"
          name="passwordCopy"
          isDisabled={isLoading}
        />
      </div>
    </>
  );
};

export default Password;
