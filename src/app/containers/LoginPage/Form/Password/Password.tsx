import { ChangeEvent } from "react";

import BasicInput, { InputType } from "@/app/components/inputs/BasicInput";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { changeLoginData } from "@/store/Auth/slice";

const Password: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    login: { password },
    isLoading,
  } = useAppSelector((state) => state.data);

  return (
    <div className="flex flex-col justify-center w-full px-16">
      <BasicInput
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          dispatch(changeLoginData({ password: e.target.value }))
        }
        inputType={InputType.PASSWORD}
        label="Hasło"
        name="password"
        isDisabled={isLoading}
      />
    </div>
  );
};

export default Password;
