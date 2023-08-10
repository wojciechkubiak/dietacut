export enum Gender {
  MALE = "m",
  FEMALE = "f",
}

export enum Activity {
  LOW = "low",
  MEDIUM = "medium",
  ADVANCED = "advanced",
  HIGH = "high",
  PROFESSIONAL = "professional",
}

export enum BodyType {
  ECTOMORPH = "ectomorph",
  MESOMORPH = "mesomorph",
  ENDOMORPH = "endomorph",
}

export interface Proportions {
  fat: number;
  carbs: number;
  proteins: number;
}
