import { createContext } from "react";

const initialWorkOut = {
  notes: "Need to work on form",
  date: Date()
};

export const WorkOutContext = createContext(initialWorkOut);
