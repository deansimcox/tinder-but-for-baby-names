import * as React from "react";
import { useGetTotalNamesAmount } from "../store/api";

export const Gender = {
  m: "m",
  f: "f",
} as const;

export type GenderType = keyof typeof Gender;

interface AppContextProps {
  gender: GenderType;
  totalNames: number;
  votedNames: Map<string, boolean>;
  updateGender: (gender: GenderType) => void;
  updateVotedNames: (id: string, vote: boolean) => void;
}

const AppContext = React.createContext<AppContextProps | undefined>(undefined);
AppContext.displayName = "AppContext";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [gender, updateGender] = React.useState<GenderType>(Gender.m);
  const namesAmountResponse = useGetTotalNamesAmount();
  const totalNames = namesAmountResponse.data;

  const votedNames = new Map<string, boolean>();
  const updateVotedNames = (id: string, vote: boolean) =>
    votedNames.set(id, vote);

  for (let index = 0; index < totalNames; index++) {
    votedNames.set(`${index}`, false);
  }

  const contextValue = React.useMemo(
    () => ({
      gender,
      totalNames,
      votedNames,
      updateGender,
      updateVotedNames,
    }),
    [namesAmountResponse.data]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default function useAppContext() {
  const context = React.useContext(AppContext);

  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }

  return context;
}
