import { ChangeEvent } from "react";

import { useAppDispatch, useAppSelector } from "@/store/store";
import { changeRegisterData } from "@/store/Auth/slice";
import NumberInput from "@/app/components/inputs/NumberInput";
import FormRecord from "@/app/containers/RegisterPage/Form/FormRecord";

const TargetWeight: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register: { targetWeight },
    isLoading,
  } = useAppSelector((state) => state.data);

  return (
    <FormRecord
      header="Waga docelowa"
      description="Ta informacja pozwoli na wizualizowanie Twego progresu."
    >
      <NumberInput
        value={targetWeight}
        min={30}
        max={500}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          dispatch(changeRegisterData({ targetWeight: Number(e.target.value) }))
        }
        name="targetWeight"
        isDisabled={isLoading}
      />
    </FormRecord>
  );
};

export default TargetWeight;
