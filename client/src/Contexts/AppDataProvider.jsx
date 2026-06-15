import { createContext, useContext } from "react";
import useSWR from "swr";
import { fetchAppData } from "../utils/contentful";

const AppDataContext = createContext();

export const AppDataProvider = ({ children }) => {
  const { data: appData, error, isLoading } = useSWR("appData", fetchAppData);

  return (
    <AppDataContext.Provider value={{ appData, error, isLoading }}>
      {children}
    </AppDataContext.Provider>
  );
};

export const useAppData = () => {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error("useAppData must be used within AppDataProvider");
  }
  return context;
};
