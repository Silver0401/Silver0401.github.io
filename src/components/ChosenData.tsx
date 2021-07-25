import React, { useState, createContext } from "react";
import { Data, GlobalContext } from "./../types";

export const ChosenDataContext = createContext<GlobalContext>({
  transversalData: {
    section: "InitSection",
    knowMeButtonClicked: false,
    scrollTo: false,
  },
  setTransversalData: () => {},
});

export const ChosenDataContextProvider: React.FC = (props) => {
  const [transversalData, setTransversalData] = useState<Data>({
    section: "InitSection",
    knowMeButtonClicked: false,
    scrollTo: false,
  });

  return (
    <ChosenDataContext.Provider value={{ transversalData, setTransversalData }}>
      {props.children}
    </ChosenDataContext.Provider>
  );
};
