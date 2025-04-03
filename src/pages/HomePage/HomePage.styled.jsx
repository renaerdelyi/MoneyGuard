import styled from 'styled-components';

export const StyledSectionHome = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    width: 715px;
    height: 100%;
  }

  @media only screen and (min-width: 1280px) {
    margin-top: 20px;
    padding-left: 69px;
    width: 785px;
    height: 100%;
  }
`;
