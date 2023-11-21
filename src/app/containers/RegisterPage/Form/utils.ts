import { Activity } from "@/models/User";
import { CaloricDemandCalculationData } from "@/models/RegisterCalculation";
import { Gender } from "@/models/User";
import { differenceInYears } from "date-fns";

const isBelowTen = (value: number): string =>
  value < 10 ? `0${value}` : value.toString();

export const formatDate = (newDate: string): string => {
  const date = new Date(newDate);

  const day = isBelowTen(date.getDate());
  const month = isBelowTen(date.getMonth() + 1);
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
};

const isValidDate = (date: any) => {
  return (
    date &&
    Object.prototype.toString.call(date) === "[object Date]" &&
    !isNaN(date)
  );
};

const isRequiredData = ({
  birthday,
  gender,
  height,
  initialWeight,
  activityLevel,
}: CaloricDemandCalculationData) => {
  return (
    isValidDate(new Date(birthday)) &&
    !!gender &&
    !!height &&
    !!initialWeight &&
    !!activityLevel
  );
};

const activityMultipliers = {
  [Activity.LOW]: 1.2,
  [Activity.MEDIUM]: 1.375,
  [Activity.HIGH]: 1.55,
  [Activity.ADVANCED]: 1.725,
  [Activity.PROFESSIONAL]: 1.9,
};

export const getCalculatedCaloriesIntake = (
  data: CaloricDemandCalculationData
): number | undefined => {
  if (!isRequiredData(data)) return;

  let calories = 0;

  if (data.gender === Gender.FEMALE) {
    calories +=
      655 +
      9.6 * data.initialWeight! +
      1.8 * data.height! -
      4.7 * differenceInYears(new Date(), new Date(data.birthday));
  } else {
    calories +=
      66 +
      13.7 * data.initialWeight! +
      5 * data.height! -
      6.8 * differenceInYears(new Date(), new Date(data.birthday));
  }

  return Math.ceil(
    calories * activityMultipliers[data.activityLevel] + data.reducedKcal
  );
};

export const getCalculatedProportions = (
  kcal: number,
  carbsPercentage: number,
  fatPercentage: number,
  proteinsPercentage: number
) => {
  const carbsGrams = Math.round((kcal * (carbsPercentage / 100)) / 4);
  const fatGrams = Math.round((kcal * (fatPercentage / 100)) / 9);
  const proteinsGrams = Math.round((kcal * (proteinsPercentage / 100)) / 4);

  return { carbsGrams, fatGrams, proteinsGrams };
};
