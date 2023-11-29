import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { changeRegisterData } from "@/store/Auth/slice";
import BasicInput, { InputType } from "@/app/components/inputs/BasicInput";
import FormRecord from "../FormRecord/FormRecord";
import DateInput from "@/app/components/inputs/DateInput";
import { formatDate } from "../utils";

const Birthday: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register: { birthday },
    isLoading,
  } = useAppSelector((state) => state.data);

  const onBirthdayChange = (value: string) => {
    const formattedDate = formatDate(value);

    dispatch(changeRegisterData({ birthday: formattedDate }));
  };

  return (
    <FormRecord
      header="Data urodzenia"
      description="Na podstawie tej informacji możemy nie tylko wyliczyć dokładniejsze
    zapotrzebowanie, jak również możemy sprawdzić czy jesteś osobą dorosłą.
    W przypadku osób młodocianych zalecany jest dietetyk."
    >
      <DateInput
        extraClassNames="mt-4"
        onChange={(e) => {
          const valueAsDate = e.target.valueAsDate?.toISOString();
          if (valueAsDate) onBirthdayChange(valueAsDate);
        }}
        name="birthday"
        value={birthday}
        isFullWidth
        isDisabled={isLoading}
      />
    </FormRecord>
  );
};

export default Birthday;
