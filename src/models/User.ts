export enum Gender {
  MALE = "Male",
  FEMALE = "Female",
}

export enum Activity {
  LOW = "low",
  MEDIUM = "medium",
  ADVANCED = "advanced",
  HIGH = "high",
  PROFESSIONAL = "professional",
}

export interface Proportions {
  fat: number;
  carbs: number;
  proteins: number;
}
