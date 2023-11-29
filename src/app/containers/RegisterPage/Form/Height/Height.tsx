import { ChangeEvent } from "react";

import { useAppDispatch, useAppSelector } from "@/store/store";
import { changeRegisterData } from "@/store/Auth/slice";
import FormRecord from "../FormRecord/FormRecord";
import NumberInput from "@/app/components/inputs/NumberInput";

const Height: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register: { height },
    isLoading,
  } = useAppSelector((state) => state.data);

  return (
    <FormRecord
      header="Wzrost"
      description="Podaj realne dane (nikt poza Tobą ich nie zobaczy), dzięki czemu będziemy w stanie wyliczyć Twoje zapotrzebowanie z najlepszą możliwą dokładnością"
    >
      <NumberInput
        value={height}
        min={65}
        max={245}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          dispatch(changeRegisterData({ height: Number(e.target.value) }))
        }
        name="height"
        isDisabled={isLoading}
      />
    </FormRecord>
  );
};

export default Height;
