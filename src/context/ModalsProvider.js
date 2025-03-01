import React, { useContext, useState } from "react";
import { createContext } from "react";

const ModalsContext = createContext();

export const useModals = () => {
  return useContext(ModalsContext);
};

export default function ModalsProvider(props) {
  const [region, setRegion] = useState(false);
  const [userName, setUsername] = useState(null);

  const setUserName = (name) => {
    setUsername(name);
  };

  const setRegionName = (name) => {
    setRegion(name);
  };

  return (
    <ModalsContext.Provider
      value={{
        setRegionName,
        region,

        setUserName,
        userName,
      }}
    >
      {props.children}
    </ModalsContext.Provider>
  );
}
