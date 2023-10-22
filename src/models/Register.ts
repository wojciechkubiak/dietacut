import { Activity, Gender, Proportions } from "@/models/User";
import { UserLoginData } from "./Login";

export interface UserRegisterData extends UserLoginData {
  name: string;
  birthday: string;
  gender: Gender;
  height?: number;
  initialWeight?: number;
  targetWeight?: number;
  activityLevel: Activity;

  reducedKcal: number;
  proportions: Proportions;
}

export type CaloricDemandCalculationData = Pick<
  UserRegisterData,
  "birthday" | "gender" | "height" | "initialWeight" | "activityLevel"
>;
