import { createContext } from "react";

const initialWorkOut = {
  notes: "Need to work on form",
  date: Date.now()
};

export const WorkOutContext = createContext(initialWorkOut);
