import React, { useState, createContext } from "react";

export const ChosenDataContext = createContext<any>(null);

interface Data {
  section: string | null;
  KnowMeButtonClicked: boolean;
}

export const ChosenDataContextProvider: React.FC = (props) => {
  const [transversalData, setTransversalData] = useState<Data>({
    section: null,
    KnowMeButtonClicked: false,
  });

  return (
    <ChosenDataContext.Provider value={[transversalData, setTransversalData]}>
      {props.children}
    </ChosenDataContext.Provider>
  );
};
