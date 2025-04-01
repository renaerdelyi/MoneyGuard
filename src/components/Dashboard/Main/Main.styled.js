import styled from 'styled-components';

export const MainStyled = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-grow: 1;
  padding-top: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 0;
    flex-direction: column;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 0;
    max-width: 1280px;
    flex-direction: row;
    align-items: flex-start;
  }
`;
