import { createContext } from "react";

const initialExcercise = {
  name: "Push Up",
  reps: "15",
  weight: "150lbs",
  muscles_targeted: "Chest & Arms"
};

export const ExcerciseContext = createContext(initialExcercise);
