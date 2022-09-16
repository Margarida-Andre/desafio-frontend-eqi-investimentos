import React, { useState } from "react";
import Button from "../components/button";
import Card from "../components/card";
import IndexingTypes from "../components/indexingTypes";
import Input from "../components/input/input";
import YieldButtons from "../components/yieldButtons";
import { api } from "../services/api";
import * as S from "./styles";
import { Formik } from "formik";
import { SimulationForm } from "./validations";
import { useIndicator } from "../hooks/useIndicator";

export default function Home() {
  const { indicator } = useIndicator();
  const [visible, setVisible] = useState(false);
  const [tipoRendimento, setTipoRendimento] = useState("bruto");
  const [tipoIndexacao, setTipoIndexacao] = useState("pos");
  const [valorFinalBruto, setValorFinalBruto] = useState(0);
  const [aliquotaIR, setAliquotaIR] = useState(0);
  const [valorPagoIR, setValorPagoIR] = useState(0);
  const [valorFinalLiquido, setValorFinalLiquido] = useState(0);
  const [valorTotalInvestido, setValorTotalInvestido] = useState(0);
  const [ganhoLiquido, setGanhoLiquido] = useState(0);

  async function hundleSimulations() {
    await api
      .get(
        `/simulacoes?tipoIndexacao=${tipoIndexacao}&tipoRendimento=${tipoRendimento}`
      )
      .then((response) => response.data)
      .then((result) => {
        setValorFinalBruto(result[0].valorFinalBruto);
        setAliquotaIR(result[0].valorFinalBruto);
        setValorPagoIR(result[0].valorFinalBruto);
        setValorTotalInvestido(result[0].valorTotalInvestido);
        setValorFinalLiquido(result[0].valorFinalLiquido);
        setGanhoLiquido(result[0].ganhoLiquido);
      });
    setVisible(true);
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Simulador de Investimentos</S.Title>
        <S.Box>
          <S.Simulator>
            <S.MinTitle>Simulador</S.MinTitle>
            <Formik
              initialValues={{
                aporteInicial: "",
                aporteMensal: "",
                prazo: "",
                rentabilidade: "",
              }}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={SimulationForm}
            >
              {({
                values,
                handleChange,
                handleBlur,
                errors,
                touched,
                resetForm,
              }) => (
                <>
                  <S.ContainerButtons>
                    <YieldButtons
                      onclickBruto={() => setTipoRendimento("bruto")}
                      onclickLiquido={() => setTipoRendimento("liquido")}
                      isActiveBruto={tipoRendimento === "bruto"}
                      isActiveLiquido={tipoRendimento === "liquido"}
                    />
                    <IndexingTypes
                      onclickPre={() => setTipoIndexacao("pre")}
                      onclickPos={() => setTipoIndexacao("pos")}
                      onclickFixado={() => setTipoIndexacao("fixado")}
                      isActivePre={tipoIndexacao === "pre"}
                      isActivePos={tipoIndexacao === "pos"}
                      isActiveFixado={tipoIndexacao === "fixado"}
                    />
                  </S.ContainerButtons>

                  <S.ContainerInput>
                    <div>
                      <Input
                        description="Aporte Inicial"
                        name="aporteInicial"
                        type="text"
                        value={values.aporteInicial}
                        onBlur={handleBlur("aporteInicial")}
                        onChange={handleChange("aporteInicial")}
                        classnameLabel={
                          touched.aporteInicial && errors.aporteInicial
                            ? "label-error"
                            : "none"
                        }
                        classnameInput={
                          touched.aporteInicial && errors.aporteInicial
                            ? "input-error"
                            : "none"
                        }
                      />
                      {touched.aporteInicial && errors.aporteInicial ? (
                        <S.Errors>{errors.aporteInicial}</S.Errors>
                      ) : null}
                    </div>

                    <div>
                      <Input
                        description="Aporte Mensal"
                        name="aporteMensal"
                        type="text"
                        value={values.aporteMensal}
                        onBlur={handleBlur("aporteMensal")}
                        onChange={handleChange("aporteMensal")}
                        classnameLabel={
                          touched.aporteMensal && errors.aporteMensal
                            ? "label-error"
                            : "none"
                        }
                        classnameInput={
                          touched.aporteMensal && errors.aporteMensal
                            ? "input-error"
                            : "none"
                        }
                      />
                      {touched.aporteMensal && errors.aporteMensal ? (
                        <S.Errors>{errors.aporteMensal}</S.Errors>
                      ) : null}
                    </div>
                  </S.ContainerInput>

                  <S.ContainerInput>
                    <div>
                      <Input
                        description="Prazo (em meses)"
                        type="text"
                        name="prazo"
                        value={values.prazo}
                        onBlur={handleBlur("prazo")}
                        onChange={handleChange("prazo")}
                        classnameLabel={
                          touched.prazo && errors.prazo ? "label-error" : "none"
                        }
                        classnameInput={
                          touched.prazo && errors.prazo ? "input-error" : "none"
                        }
                      />
                      {touched.prazo && errors.prazo ? (
                        <S.Errors>{errors.prazo}</S.Errors>
                      ) : null}
                    </div>

                    <div>
                      <Input
                        description="Rentabilidade"
                        type="text"
                        name="rentabilidade"
                        value={values.rentabilidade}
                        onBlur={handleBlur("rentabilidade")}
                        onChange={handleChange("rentabilidade")}
                        classnameLabel={
                          touched.rentabilidade && errors.rentabilidade
                            ? "label-error"
                            : "none"
                        }
                        classnameInput={
                          touched.rentabilidade && errors.rentabilidade
                            ? "input-error"
                            : "none"
                        }
                      />

                      {touched.rentabilidade && errors.rentabilidade ? (
                        <S.Errors>{errors.rentabilidade}</S.Errors>
                      ) : null}
                    </div>
                  </S.ContainerInput>

                  <S.ContainerInput>
                    {indicator.map((item) => {
                      return (
                        <Input
                          description={
                            item.nome.toLocaleUpperCase() + " (em ano)"
                          }
                          type="text"
                          value={item.valor}
                          name={""}
                        />
                      );
                    })}
                  </S.ContainerInput>

                  <S.ContainerSubmit>
                    <Button
                      type="reset"
                      className="clean"
                      onClick={() => resetForm()}
                    >
                      Limpar campos
                    </Button>

                    <Button
                      type="submit"
                      onClick={() => hundleSimulations()}
                      color="#808080"
                    >
                      Simular
                    </Button>
                  </S.ContainerSubmit>
                </>
              )}
            </Formik>
          </S.Simulator>
          {visible ? (
            <S.SimulationResult>
              <S.MinTitle>Resultado da Simulação</S.MinTitle>
              <S.ContainerCards>
                <Card
                  title="Valor Final Bruto"
                  value={new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(valorFinalBruto)}
                />

                <Card title="Aliquota do IR" value={aliquotaIR} />

                <Card
                  title="Valor Pago em IR"
                  value={new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(valorPagoIR)}
                />

                <Card
                  title="Valor final Líquido"
                  value={new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(valorFinalLiquido)}
                  className="green"
                />
                <Card
                  title="Valor Total Investido"
                  value={new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(valorTotalInvestido)}
                />
                <Card
                  title="Ganho Líquido"
                  value={new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(ganhoLiquido)}
                  className="green"
                />
              </S.ContainerCards>
            </S.SimulationResult>
          ) : null}
        </S.Box>
      </S.Container>
    </S.Wrapper>
  );
}
