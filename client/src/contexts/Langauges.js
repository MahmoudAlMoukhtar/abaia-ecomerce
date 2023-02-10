import React, {useState, useEffect, createContext, useContext} from "react";

const LangaugesContext = createContext({});
export const LangaugesProvider = props => {
  const [langauge, setLangauge] = useState("ar");

  return (
    <LangaugesContext.Provider value={{langauge, setLangauge}}>
      {props.children}
    </LangaugesContext.Provider>
  );
};

export const useLangauges = () => {
  const context = useContext(LangaugesContext);
  return context;
};
