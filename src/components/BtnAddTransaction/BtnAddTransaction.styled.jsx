import styled from 'styled-components';

export const BtnOpenModal = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 44px;
  height: 44px;
  bottom: -25px;
  right: 30px;
  border-radius: 50%;
  color: #fbfbfb;
  border: none;
  background: linear-gradient(
    97deg,
    #ffc727 -16.42%,
    #9e40ba 97.04%,
    #7000ff 150.71%
  );
  cursor: pointer;
  z-index: 10;

  &:hover {
    background: linear-gradient(
      97deg,
      #7000ff -16.42%,
      #9e40ba 97.04%,
      #ffc727 150.71%
    );
  }

  @media only screen and (min-width: 768px) {
    right: 35px;
    bottom: -50px;
  }
  @media only screen and (min-width: 1280px) {
    right: 30px;
    bottom: -30px;
  }
`;
