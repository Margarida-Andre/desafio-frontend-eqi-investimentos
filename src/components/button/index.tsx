import React from "react";
import * as S from "./styles";
import { ButtonProps } from "./type";

const button: React.FC<ButtonProps> = ({
  type,
  color,
  children,
  className,
  onClick,
}) => {
  return (
    <S.Button type={type} color={color} className={className} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default button;
