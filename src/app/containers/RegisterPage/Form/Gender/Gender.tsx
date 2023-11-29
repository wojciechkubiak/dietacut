import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { changeRegisterData } from "@/store/Auth/slice";
import BasicInput, { InputType } from "@/app/components/inputs/BasicInput";
import FormRecord from "../FormRecord/FormRecord";
import { Gender as IGender } from "@/models/User";
import GenderType from "./GenderType";

const Gender: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register: { gender },
  } = useAppSelector((state) => state.data);

  const onChangeGender = (value: IGender) => {
    dispatch(changeRegisterData({ gender: value }));
  };

  return (
    <FormRecord
      header="Płeć"
      description="Wybierz swoją biologiczną płeć. Pozwoli to na wyliczenie Twego zapotrzebowania."
    >
      <GenderType currentValue={gender} onChange={onChangeGender} />
    </FormRecord>
  );
};

export default Gender;
