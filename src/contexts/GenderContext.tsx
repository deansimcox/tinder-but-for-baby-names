import * as React from "react";

export type Gender = "boy" | "girl";

interface GenderContextProps {
  gender: Gender;
  updateGender: (gender: Gender) => void;
}

const GenderContext = React.createContext<GenderContextProps | undefined>(
  undefined
);
GenderContext.displayName = "GenderContext";

export const GenderProvider = ({ children }: { children: React.ReactNode }) => {
  const [gender, updateGender] = React.useState<Gender>("boy");
  return (
    <GenderContext.Provider value={{ gender, updateGender }}>
      {children}
    </GenderContext.Provider>
  );
};

export default function useGenderContext() {
  const context = React.useContext(GenderContext);

  if (context === undefined) {
    throw new Error(
      "useGenderContext must be used within a HeaderLayoutProvider"
    );
  }

  return context;
}
