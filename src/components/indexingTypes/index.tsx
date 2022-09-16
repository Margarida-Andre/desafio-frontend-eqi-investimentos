import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { IndexingTypeProps } from "./type";
import * as S from "./styles";

const IndexingTypes: React.FC<IndexingTypeProps> = ({
  onclickPre,
  onclickPos,
  onclickFixado,
  isActivePre,
  isActivePos,
  isActiveFixado,
}) => {
  return (
    <S.ContainerIndexing>
      <S.ContainerLabel>
        <S.Label>Tipos de indexação</S.Label>
        <FiAlertCircle />
      </S.ContainerLabel>

      <S.ContainerButtons>
        <S.IndexingButtons
          className="pre"
          onClick={onclickPre}
          isActive={isActivePre}
        >
          PRÉ
        </S.IndexingButtons>
        <S.IndexingButtons
          className="pos"
          onClick={onclickPos}
          isActive={isActivePos}
        >
          POS
        </S.IndexingButtons>

        <S.IndexingButtons
          className="fixado"
          onClick={onclickFixado}
          isActive={isActiveFixado}
        >
          FIXADO
        </S.IndexingButtons>
      </S.ContainerButtons>
    </S.ContainerIndexing>
  );
};

export default IndexingTypes;
