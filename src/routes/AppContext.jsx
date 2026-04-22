// AppContext.jsx
import { createContext, useContext } from "react";
import { obtenerPeriodoActual } from "./Utils";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const periodo = obtenerPeriodoActual();

  const dataGlobal = {
    periodo,
    //usuario: "diegozh",
    //ciudad: "Cusco"
  };

  return (
    <AppContext.Provider value={dataGlobal}>{children}</AppContext.Provider>
  );
};
export const useGlobalData = () => useContext(AppContext);
