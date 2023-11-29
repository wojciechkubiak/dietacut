import { ChangeEvent } from "react";

import BasicInput, { InputType } from "@/app/components/inputs/BasicInput";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { changeRegisterData } from "@/store/Auth/slice";

const Mail: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register: { email },
    isLoading,
  } = useAppSelector((state) => state.data);

  return (
    <div className="flex flex-col justify-center w-full px-16">
      <BasicInput
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          dispatch(changeRegisterData({ email: e.target.value }))
        }
        label="Email"
        name="email"
        inputType={InputType.EMAIL}
        isDisabled={isLoading}
      />
    </div>
  );
};

export default Mail;
