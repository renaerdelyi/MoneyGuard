import styled from 'styled-components';

export const TransactionsTableStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 768px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    justify-content: flex-start;
    padding-left: 20px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    // max-width: 800px;
    width: 100%;
    padding-left: 0;
    margin-top: 0;
  }
`;
