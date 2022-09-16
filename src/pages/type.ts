export type SimulationsProps = {
  valorFinalBruto: number;
  aliquotaIR: number;
  valorPagoIR: number;
  valorTotalInvestido: number;
  valorFinalLiquido: number;
  ganhoLiquido: number;
};

export type IndicatorsProps = {
  key: number;
  nome: string;
  valor: number;
};

export type IndicatorsProviderProps = {
  children: React.ReactNode;
};
