import { useCallback, useEffect, useMemo, useState } from "react";
import {
  getCalculatedCaloriesIntake,
  getCalculatedProportions,
} from "../utils";
import { CaloricDemandCalculationData } from "@/models/RegisterCalculation";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { changeRegisterData } from "@/store/Auth/slice";

const useCaloriesIntake = (caloriesIntake?: number) => {
  const dispatch = useAppDispatch();
  const {
    register,
    register: {
      gender,
      initialWeight,
      reducedKcal,
      height,
      activityLevel,
      proportions: {
        carbs: { percentage: carbsPercentage },
        fat: { percentage: fatPercentage },
      },
      birthday,
    },
    isLoading,
  } = useAppSelector((state) => state.data);

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

  useEffect(() => {
    if (!!caloriesIntake) {
      onChangeProportions([carbsPercentage, carbsPercentage + fatPercentage]);
    }
  }, [caloriesIntake, carbsPercentage, fatPercentage, onChangeProportions]);

  return {
    register,
    caloricDemandCalculationData,
    onChangeProportions,
    isLoading,
  };
};

export default useCaloriesIntake;
