import { Activity, Gender, Proportions } from "@/models/User";
import { LoginFormData } from "./Login";

export interface RegisterFormData extends LoginFormData {
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
