import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { YildButtonProps } from "./type";
import * as S from "./styles";

const YildButtons: React.FC<YildButtonProps> = ({
  onclickBruto,
  onclickLiquido,
  isActiveBruto,
  isActiveLiquido,
}) => {
  return (
    <S.ContainerYield>
      <S.ContainerLabel>
        <S.Label>Rendimento</S.Label>
        <FiAlertCircle />
      </S.ContainerLabel>

      <S.ContainerButtons>
        <S.IncomeButtons
          className="bruto"
          onClick={onclickBruto}
          isActive={isActiveBruto}
        >
          Bruto
        </S.IncomeButtons>
        <S.IncomeButtons
          className="liquido"
          onClick={onclickLiquido}
          isActive={isActiveLiquido}
        >
          Líquido
        </S.IncomeButtons>
      </S.ContainerButtons>
    </S.ContainerYield>
  );
};

export default YildButtons;
