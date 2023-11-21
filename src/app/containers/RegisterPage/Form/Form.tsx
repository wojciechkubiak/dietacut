import {
  ChangeEvent,
  FC,
  FormEvent,
  useEffect,
  useMemo,
  useCallback,
  useState,
} from "react";
import { ColorRing } from "react-loader-spinner";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { registerUser } from "@/store/Auth/actions";
import { changeRegisterData } from "@/store/Auth/slice";
import BasicInput, { InputType } from "@/app/components/inputs/BasicInput";
import FormSubHeader from "@/app/components/headers/FormSubHeader";
import FormRecord from "./FormRecord/FormRecord";
import {
  formatDate,
  getCalculatedCaloriesIntake,
  getCalculatedProportions,
} from "./utils";
import { AiOutlineCheck } from "react-icons/ai";
import DateInput from "@/app/components/inputs/DateInput";
import NumberInput from "@/app/components/inputs/NumberInput";
import { Activity, Gender } from "@/models/User";
import { CaloricDemandCalculationData } from "@/models/Register";
import ActivityLevel from "./ActivityLevel";
import GenderType from "./GenderType";

import "rc-slider/assets/index.css";
import CustomSlider from "@/app/components/common/CustomSlider";

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
      proportions: {
        carbs: { percentage: carbsPercentage, grams: carbsGrams },
        fat: { percentage: fatPercentage, grams: fatGrams },
        proteins: { percentage: proteinsPercentage, grams: proteinsGrams },
      },
      birthday,
    },
    isLoading,
  } = useAppSelector((state) => state.data);
  const [passwordCopy, setPasswordCopy] = useState("");
  const [isCustomCaloriesIntake, setIsCustomCaloriesIntake] = useState(false);
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

  const onChangeReducedKcal = (value: number) => {
    dispatch(changeRegisterData({ reducedKcal: value }));
  };

  const onBirthdayChange = (value: string) => {
    const formattedDate = formatDate(value);

    dispatch(changeRegisterData({ birthday: formattedDate }));
  };

  const onChangePasswordCopy = (e: ChangeEvent<HTMLInputElement>) =>
    setPasswordCopy(e.target.value);

  const onChangeProportions = useCallback(
    (value: number[]) => {
      if (!caloriesIntake) return;

      const [start, end] = value;

      const carbsPercentage = start;
      const fatPercentage = end - carbsPercentage;
      const proteinsPercentage = 100 - (carbsPercentage + fatPercentage);

      const { carbsGrams, fatGrams, proteinsGrams } = getCalculatedProportions(
        caloriesIntake,
        carbsPercentage,
        fatPercentage,
        proteinsPercentage
      );

      dispatch(
        changeRegisterData({
          proportions: {
            carbs: {
              grams: carbsGrams,
              percentage: carbsPercentage,
            },
            fat: {
              grams: fatGrams,
              percentage: fatPercentage,
            },
            proteins: {
              grams: proteinsGrams,
              percentage: proteinsPercentage,
            },
          },
        })
      );
    },
    [caloriesIntake, dispatch]
  );

  const caloricDemandCalculationData: CaloricDemandCalculationData = useMemo(
    () => ({
      birthday,
      gender,
      height,
      initialWeight,
      activityLevel,
      reducedKcal,
    }),
    [birthday, gender, height, initialWeight, activityLevel, reducedKcal]
  );

  useEffect(() => {
    const intake = getCalculatedCaloriesIntake(caloricDemandCalculationData);
    setCaloriesIntake(intake);
  }, [isCustomCaloriesIntake, caloricDemandCalculationData]);

  useEffect(() => {
    if (!!caloriesIntake) {
      onChangeProportions([carbsPercentage, carbsPercentage + fatPercentage]);
    }
  }, [caloriesIntake, carbsPercentage, fatPercentage, onChangeProportions]);

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
        <GenderType currentValue={gender} onChange={onChangeGender} />
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
        <ActivityLevel
          currentValue={activityLevel}
          onChange={onChangeActivityLevel}
        />
      </FormRecord>
      {!!caloriesIntake ? (
        <>
          <FormRecord
            header="Wyliczone zapotrzebowanie kaloryczne (kcal)"
            description="Dodamy/odejmiemy kalorie na podstawie Twego wyboru."
            onCheckboxChange={() => {
              setIsCustomCaloriesIntake(!isCustomCaloriesIntake);
            }}
            isChecked={isCustomCaloriesIntake}
          >
            {isCustomCaloriesIntake ? (
              <NumberInput
                value={caloriesIntake}
                onChange={(e) => setCaloriesIntake(+e.target.value)}
                name="caloriesIntake"
              />
            ) : (
              <>
                <div className="relative left-1/2 my-8 -translate-x-1/2 flex justify-center items-center rounded-full bg-orange-300 shadow-lg w-52 h-52">
                  <div className="w-44 h-44 bg-white rounded-full flex flex-col justify-center items-center shadow-md">
                    <h1 className="text-4xl text-gray-600">
                      {caloriesIntake || "B/D"}
                    </h1>
                    <p className="text-sm text-gray-400">
                      {reducedKcal / 1000} kg / week
                    </p>
                  </div>
                </div>
                <div className="relative mb-8 w-1/2 left-1/2 -translate-x-1/2">
                  <CustomSlider
                    min={-1000}
                    max={1000}
                    value={reducedKcal}
                    step={100}
                    onChange={(value) => {
                      if (!Array.isArray(value)) {
                        onChangeReducedKcal(value);
                      }
                    }}
                  />
                </div>
              </>
            )}
          </FormRecord>

          <FormRecord header="Proporcje makroelementów (%)">
            <div className="flex space-x-2 my-8">
              <div>
                <NumberInput name="carbs" value={carbsPercentage} isDisabled />
                <p className="text-xs text-zinc-400">
                  Węglowodany ({carbsGrams}g)
                </p>
              </div>
              <div>
                <NumberInput name="fat" value={fatPercentage} isDisabled />
                <p className="text-xs text-zinc-400">Tłuszcz ({fatGrams}g)</p>
              </div>
              <div>
                <NumberInput
                  name="proteins"
                  value={proteinsPercentage}
                  isDisabled
                />
                <p className="text-xs text-zinc-400">
                  Białko ({proteinsGrams}g)
                </p>
              </div>
            </div>
            <div className="relative mb-8 w-1/2 left-1/2 -translate-x-1/2">
              <CustomSlider
                min={0}
                max={100}
                value={[carbsPercentage, carbsPercentage + fatPercentage]}
                step={1}
                onChange={(value) => {
                  if (Array.isArray(value)) {
                    onChangeProportions(value);
                  }
                }}
                isRange
              />
            </div>
          </FormRecord>
        </>
      ) : null}

      {!isLoading ? (
        <button
          className="w-72 h-16 flex justify-between items-center px-16 shadow-xl text-xl rounded-lg bg-white hover:text-gray-700  border-2 border-orange-100 hover:border-orange-200 text-gray-600"
          type="submit"
        >
          <AiOutlineCheck />
          Zatwierdź
        </button>
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
    </form>
  );
};

export default Form;
