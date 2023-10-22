import {
  ChangeEvent,
  FC,
  FormEvent,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ColorRing } from "react-loader-spinner";
import { AiOutlinePlus } from "react-icons/ai";
import ReactSlider from "react-slider";
import { FaFemale, FaMale } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { registerUser } from "@/store/Auth/actions";
import { changeRegisterData } from "@/store/Auth/slice";
import BasicInput, { InputType } from "@/app/components/inputs/BasicInput";
import FormSubHeader from "@/app/components/headers/FormSubHeader";
import FormRecord from "./FormRecord/FormRecord";
import { formatDate, getCalculatedCaloriesIntake } from "./utils";

import DateInput from "@/app/components/inputs/DateInput";
import NumberInput from "@/app/components/inputs/NumberInput";
import { Activity, Gender } from "@/models/User";
import Radio from "@/app/components/inputs/Radio";
import { CaloricDemandCalculationData } from "@/models/Register";

const Form: FC = () => {
  const dispatch = useAppDispatch();
  const {
    register: registerData,
    register: {
      email,
      password,
      name,
      gender,
      initialWeight,
      targetWeight,
      reducedKcal,
      height,
      activityLevel,
      proportions,
      proportions: { fat, proteins, carbs },
      birthday,
    },
    isLoading,
  } = useAppSelector((state) => state.data);
  const [passwordCopy, setPasswordCopy] = useState("");
  const [caloriesIntake, setCaloriesIntake] = useState<number | undefined>();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(registerUser(registerData));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeRegisterData({ [e.target.name]: e.target.value }));

  const onChangeGender = (value: Gender) => {
    dispatch(changeRegisterData({ gender: value }));
  };

  const onChangeActivityLevel = (value: Activity) => {
    dispatch(changeRegisterData({ activityLevel: value }));
  };

  const onBirthdayChange = (value: string) => {
    console.log(value);
    const formattedDate = formatDate(value);

    dispatch(changeRegisterData({ birthday: formattedDate }));
  };

  const onChangePasswordCopy = (e: ChangeEvent<HTMLInputElement>) =>
    setPasswordCopy(e.target.value);

  const caloricDemandCalculationData: CaloricDemandCalculationData = useMemo(
    () => ({
      birthday,
      gender,
      height,
      initialWeight,
      activityLevel,
    }),
    [birthday, gender, height, initialWeight, activityLevel]
  );

  useEffect(() => {
    const intake = getCalculatedCaloriesIntake(caloricDemandCalculationData);
    setCaloriesIntake(intake);
  }, [caloricDemandCalculationData]);

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-center items-center my-10 space-y-8"
    >
      <div className="flex flex-col justify-center w-full px-16">
        <BasicInput
          value={email}
          onChange={onChange}
          inputType={InputType.EMAIL}
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

      <FormRecord
        header="Imię"
        description="W ten sposób będziemy się do Ciebie zwracać."
      >
        <BasicInput
          value={name}
          onChange={onChange}
          inputType={InputType.TEXT}
          name="name"
        />
      </FormRecord>

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
          isFullWidth
        />
      </FormRecord>

      <FormRecord
        header="Płeć"
        description="Wybierz swoją biologiczną płeć. Pozwoli to na wyliczenie Twego zapotrzebowania."
      >
        <Radio
          name="gender"
          options={[Gender.FEMALE, Gender.MALE]}
          value={gender}
          onChange={onChangeGender}
        />
      </FormRecord>

      <FormRecord
        header="Wzrost"
        description="Podaj realne dane (nikt poza Tobą ich nie zobaczy), dzięki czemu będziemy w stanie wyliczyć Twoje zapotrzebowanie z najlepszą możliwą dokładnością"
      >
        <NumberInput
          value={height}
          min={65}
          max={245}
          onChange={onChange}
          name="height"
        />
      </FormRecord>

      <FormRecord
        header="Waga początkowa"
        description="Tak samo jak w przypadku wzrostu, jest to informacja niezbędna do dokładnego wyliczenia zapotrzebowania."
      >
        <NumberInput
          value={initialWeight}
          min={25}
          max={500}
          onChange={onChange}
          name="initialWeight"
        />
      </FormRecord>

      <FormRecord
        header="Waga docelowa"
        description="Ta informacja pozwoli na wizualizowanie Twego progresu."
      >
        <NumberInput
          value={targetWeight}
          min={30}
          max={500}
          onChange={onChange}
          name="targetWeight"
        />
      </FormRecord>

      <FormRecord
        header="Poziom aktywności"
        description="Dodamy/odejmiemy kalorie na podstawie Twej aktywności."
      >
        <Radio
          name="activityLevel"
          options={[
            Activity.LOW,
            Activity.MEDIUM,
            Activity.HIGH,
            Activity.ADVANCED,
            Activity.PROFESSIONAL,
          ]}
          value={activityLevel}
          onChange={onChangeActivityLevel}
        />
      </FormRecord>

      <FormRecord
        header="Wyliczone zapotrzebowanie kaloryczne (kcal)"
        description="Dodamy/odejmiemy kalorie na podstawie Twej aktywności."
      >
        <NumberInput
          value={caloriesIntake}
          onChange={(e) => setCaloriesIntake(+e.target.value)}
          name="caloriesIntake"
        />
      </FormRecord>

      <FormRecord
        header="Proporcje makroelementów (%)"
        description="Suma musi wynosić 100%."
      >
        <p>miejsce na slider/input</p>
      </FormRecord>

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
