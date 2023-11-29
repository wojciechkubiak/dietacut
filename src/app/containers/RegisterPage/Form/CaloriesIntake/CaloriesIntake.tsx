import { useEffect, useState } from "react";
import FormRecord from "../FormRecord/FormRecord";
import useCaloriesIntake from "./useCaloriesIntake";
import { getCalculatedCaloriesIntake } from "../utils";
import NumberInput from "@/app/components/inputs/NumberInput";
import CustomSlider from "@/app/components/common/CustomSlider";
import { useAppDispatch } from "@/store/store";
import { changeRegisterData } from "@/store/Auth/slice";

import "rc-slider/assets/index.css";

const CaloriesIntake: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isCustomCaloriesIntake, setIsCustomCaloriesIntake] = useState(false);
  const [caloriesIntake, setCaloriesIntake] = useState<number | undefined>();

  const {
    register: {
      reducedKcal,
      proportions: {
        carbs: { percentage: carbsPercentage, grams: carbsGrams },
        fat: { percentage: fatPercentage, grams: fatGrams },
        proteins: { percentage: proteinsPercentage, grams: proteinsGrams },
      },
    },
    caloricDemandCalculationData,
    onChangeProportions,
    isLoading,
  } = useCaloriesIntake(caloriesIntake);

  const onChangeReducedKcal = (value: number) => {
    dispatch(changeRegisterData({ reducedKcal: value }));
  };

  useEffect(() => {
    const intake = getCalculatedCaloriesIntake(caloricDemandCalculationData);
    setCaloriesIntake(intake);
  }, [isCustomCaloriesIntake, caloricDemandCalculationData]);

  return (
    <>
      <FormRecord
        header={
          isCustomCaloriesIntake
            ? "Zapotrzebowanie kaloryczne (kcal)"
            : "Wyliczone zapotrzebowanie kaloryczne (kcal)"
        }
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
            isDisabled={isLoading}
          />
        ) : (
          <>
            <div className="relative left-1/2 my-8 -translate-x-1/2 flex justify-center items-center rounded-full bg-amber-300 shadow-lg w-52 h-52">
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
            <p className="text-xs text-zinc-400">Węglowodany ({carbsGrams}g)</p>
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
            <p className="text-xs text-zinc-400">Białko ({proteinsGrams}g)</p>
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
  );
};

export default CaloriesIntake;
