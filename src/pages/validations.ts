import * as yup from "yup";

export const SimulationForm = yup.object().shape({
  aporteInicial: yup
    .number()
    .typeError("Aporte deve ser um número")
    .positive("Aporte deve ser positivo")
    .integer("Aporte deve ser um número inteiro")
    .required("Aporte é obrigatório"),

  aporteMensal: yup
    .number()
    .typeError("Aporte deve ser um número")
    .positive("Aporte deve ser positivo")
    .integer("Aporte deve ser um número inteiro")
    .required("Aporte é obrigatório"),

  prazo: yup
    .number()
    .typeError("Prazo deve ser um número")
    .positive("Prazo deve ser positivo")
    .integer("Prazo deve ser um número inteiro")
    .required("Prazo é obrigatório"),

  rentabilidade: yup
    .number()
    .typeError("Rentabilidade deve ser um número")
    .positive("Rentabilidade deve ser positivo")
    .integer("Rentabilidade deve ser um número inteiro")
    .required("Rentabilidade é obrigatório"),
});
