import React, { useState, useEffect, useContext, createContext } from "react";
import { api } from "../services/api";
import { IndicatorsProps, IndicatorsProviderProps } from "../pages/type";

type IndicatorContextData = {
  indicator: IndicatorsProps[];
};

const IndicatorContext = createContext<IndicatorContextData>(
  {} as IndicatorContextData
);

export function IndicatorsProvider({ children }: IndicatorsProviderProps) {
  const [indicator, setIndicator] = useState<IndicatorsProps[]>([]);

  useEffect(() => {
    api.get("/indicadores").then((response) => setIndicator(response.data));
  }, []);

  return (
    <IndicatorContext.Provider value={{ indicator }}>
      {children}
    </IndicatorContext.Provider>
  );
}

export function useIndicator() {
  const context = useContext(IndicatorContext);
  return context;
}
