import styled from "styled-components";

export const Button = styled.button`
  width: 14rem;
  height: 3rem;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  background: ${(props) => (props.color ? props.color : "transparent")};
  font-size: ${({ theme }) => theme.size.s3};
  font-weight: ${({ theme }) => theme.font.bold};

  :hover {
    border: none;
    background: ${({ theme }) => theme.color.orange};
  }

  @media screen and (min-width: 280px) and (max-width: 912px) {
    width: 100%;
  }
`;
