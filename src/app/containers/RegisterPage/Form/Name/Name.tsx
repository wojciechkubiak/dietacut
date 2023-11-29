import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { changeRegisterData } from "@/store/Auth/slice";
import BasicInput, { InputType } from "@/app/components/inputs/BasicInput";
import FormRecord from "../FormRecord/FormRecord";

const Name: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register: { name },
    isLoading,
  } = useAppSelector((state) => state.data);

  return (
    <FormRecord
      header="Imię"
      description="W ten sposób będziemy się do Ciebie zwracać."
    >
      <BasicInput
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          dispatch(changeRegisterData({ name: e.target.value }))
        }
        inputType={InputType.TEXT}
        name="name"
        isDisabled={isLoading}
      />
    </FormRecord>
  );
};

export default Name;
