import styled from 'styled-components';

export const DashboardStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
  padding-bottom: 40px;

  background: radial-gradient(
      circle at 9% 90%,
      rgba(55, 15, 99, 0.7) 4%,
      rgba(20, 5, 89, 0.03) 26%
    ),
    radial-gradient(
      circle at 6% 18%,
      rgba(55, 15, 99, 0.8) 3%,
      rgba(7, 0, 42, 0.4) 14%
    ),
    linear-gradient(190deg, rgba(67, 4, 91, 0.9) 10%, rgba(9, 0, 49, 0.2) 26%),
    radial-gradient(
      circle at 75% 99%,
      rgba(140, 15, 95, 0.99) 15%,
      rgba(9, 0, 49, 0.99) 41%
    );

  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  max-width: 320px;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 768px;
    padding: 0 20px;
    flex-direction: column;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    flex-direction: row;
  }
`;
