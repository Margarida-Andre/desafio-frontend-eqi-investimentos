import React from "react";
import * as S from "./styles";
import { InputProps } from "./type";

const input: React.FC<InputProps> = ({
  description,
  type,
  name,
  value,
  onBlur,
  onChange,
  classnameLabel,
  classnameInput,
}) => {
  return (
    <S.Container>
      <S.Label className={classnameLabel}>{description}</S.Label>
      <S.Input
        type={type}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        className={classnameInput}
      />
    </S.Container>
  );
};

export default input;
