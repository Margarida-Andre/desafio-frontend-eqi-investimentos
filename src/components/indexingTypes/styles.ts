import styled from "styled-components";

export const ContainerIndexing = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  @media screen and (min-width: 280px) and (max-width: 912px) {
    width: 100%auto;
  }
`;

export const ContainerLabel = styled.div`
  width: 100%auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 280px) and (max-width: 912px) {
    width: 100%auto;
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.color.dark};
`;

export const ContainerButtons = styled.div`
  width: 12.5rem;
  height: 2.6rem;
  display: flex;
  flex-direction: row;
  border: 0.12rem solid black;
  border-radius: 0.5rem;
  margin-top: 1rem;

  .pre {
    border-right: 0.1rem solid black;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  .pos {
    border-left: 0.1rem solid black;
    border-right: 0.1rem solid black;
  }

  .fixado {
    border-left: 0.1rem solid black;
    border-radius: 0 0.5rem 0.5rem 0;
  }

  @media screen and (min-width: 280px) and (max-width: 912px) {
    width: 100%auto;
  }
`;

interface IndexingButtonProps {
  isActive: boolean;
}

export const IndexingButtons = styled.button<IndexingButtonProps>`
  width: 50%;
  height: 2.6rem;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.size.s3};
  background: ${(props) => (props.isActive ? "#EB8C54" : "transparent")};
`;
