import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.dark};
`;

export const Input = styled.input`
  width: 12.5rem;
  border: none;
  border-bottom: 0.12rem solid black;
  background: ${({ theme }) => theme.color.grey};
  margin-top: 0.4rem;
  padding: 0.5rem 0;

  @media screen and (min-width: 280px) and (max-width: 912px) {
    width: 100%;
  }
`;
