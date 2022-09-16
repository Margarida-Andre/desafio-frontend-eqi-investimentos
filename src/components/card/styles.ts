import styled from "styled-components";

export const Card = styled.div`
  width: 13.5rem;
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 0.3rem;
  margin-top: 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.5) 0px 1px 3px -1px;
  background: ${({ theme }) => theme.color.white};

  @media screen and (min-width: 280px) and (max-width: 912px) {
    width: 100%;
    height: 6rem;
  }
`;

export const MinTitle = styled.h3`
  color: ${({ theme }) => theme.color.dark};
  font-weight: ${({ theme }) => theme.font.bold};
`;

export const Value = styled.p`
  color: ${({ theme }) => theme.color.dark};
  font-size: ${({ theme }) => theme.size.s3};
`;
