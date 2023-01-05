import * as React from "react";
import { useGetTotalNamesAmount } from "../store/api";

export type Gender = "boy" | "girl";

interface AppContextProps {
  gender: Gender;
  totalNames: number;
  updateGender: (gender: Gender) => void;
}

const AppContext = React.createContext<AppContextProps | undefined>(undefined);
AppContext.displayName = "AppContext";

export const GenderProvider = ({ children }: { children: React.ReactNode }) => {
  const [gender, updateGender] = React.useState<Gender>("boy");
  const namesAmountResponse = useGetTotalNamesAmount();

  const contextValue = React.useMemo(
    () => ({
      gender,
      totalNames: namesAmountResponse.data,
      updateGender,
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
    throw new Error(
      "useGenderContext must be used within a HeaderLayoutProvider"
    );
  }

  return context;
}
