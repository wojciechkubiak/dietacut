import { ChangeEvent } from "react";

import { useAppDispatch, useAppSelector } from "@/store/store";
import { changeRegisterData } from "@/store/Auth/slice";
import FormRecord from "../FormRecord/FormRecord";
import NumberInput from "@/app/components/inputs/NumberInput";

const InitialWeight: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register: { initialWeight },
    isLoading,
  } = useAppSelector((state) => state.data);

  return (
    <FormRecord
      header="Waga początkowa"
      description="Tak samo jak w przypadku wzrostu, jest to informacja niezbędna do dokładnego wyliczenia zapotrzebowania."
    >
      <NumberInput
        value={initialWeight}
        min={25}
        max={500}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          dispatch(
            changeRegisterData({ initialWeight: Number(e.target.value) })
          )
        }
        name="initialWeight"
        isDisabled={isLoading}
      />
    </FormRecord>
  );
};

export default InitialWeight;
