import React from "react";
import * as S from "./styles";
import { CardProps } from "./type";

const card: React.FC<CardProps> = ({ title, value, className }) => {
  return (
    <S.Card>
      <S.MinTitle>{title}</S.MinTitle>
      <S.Value className={className}>{value}</S.Value>
    </S.Card>
  );
};

export default card;
