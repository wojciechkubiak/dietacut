import { RegisterFormData } from "@/models/Register";

export type CaloricDemandCalculationData = Pick<
  RegisterFormData,
  | "birthday"
  | "gender"
  | "height"
  | "initialWeight"
  | "activityLevel"
  | "reducedKcal"
>;
