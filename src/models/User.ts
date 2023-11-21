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
  fat: {
    grams: number;
    percentage: number;
  };
  carbs: {
    grams: number;
    percentage: number;
  };
  proteins: {
    grams: number;
    percentage: number;
  };
}
