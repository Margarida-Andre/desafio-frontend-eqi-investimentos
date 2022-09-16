import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 92%;
  height: 34rem;
  display: flex;
  padding: 2rem;
  margin-top: 1.5rem;
  flex-direction: column;
  background: ${({ theme }) => theme.color.grey};

  @media screen and (max-width: 1354px) {
    height: 55rem;
    text-align: center;
  }

  @media screen and (min-width: 280px) and (max-width: 912px) {
    width: 100%;
    height: 120rem;
    margin-top: 0;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.dark};
  text-align: center;
  font-weight: ${({ theme }) => theme.font.bold};
`;

export const Box = styled.div`
  width: 100%;
  height: 37rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;

  @media screen and (max-width: 1354px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 280px) and (max-width: 912px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const MinTitle = styled.h3`
  color: ${({ theme }) => theme.color.dark};
  font-weight: ${({ theme }) => theme.font.bold};

  @media screen and (max-width: 1354px) {
    text-align: center;
  }
`;

export const Simulator = styled.article`
  width: 37%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 280px) and (max-width: 912px) {
    width: 90%;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (min-width: 280px) and (max-width: 912px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;

  .input-error {
    border-bottom: 0.12rem solid red;
  }

  .label-error {
    color: red;
  }

  @media screen and (min-width: 280px) and (max-width: 912px) {
    height: 10rem;
    flex-direction: column;
    align-items: space-between;
  }
`;

export const ContainerSubmit = styled.div`
  width: 100%auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;

  .clean {
    border: 0.12rem solid black;
  }

  @media screen and (min-width: 280px) and (max-width: 912px) {
    flex-direction: column;
    align-items: space-between;
    height: 6.6rem;
  }
`;

export const SimulationResult = styled.article`
  width: 57%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1354px) {
    width: 90%;
    margin-top: 4rem;
  }
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  .green {
    color: ${({ theme }) => theme.color.green};
  }

  @media screen and (min-width: 280px) and (max-width: 912px) {
    justify-content: column;
    align-items: center;
  }
`;

export const Errors = styled.div`
  color: red;
  margin-top: 0.5rem;
  font-size: 0.8rem;
`;
