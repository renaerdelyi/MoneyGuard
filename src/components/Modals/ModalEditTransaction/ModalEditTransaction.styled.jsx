import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  align-items: center;
  z-index: 20;

  &::before {
    background: var(--Form-color, rgba(255, 255, 255, 0.1));
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
  }

  @media only screen and (min-width: 768px) {
    justify-content: center;
  }
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 20px;
  background: var(--Form-color, rgba(255, 255, 255, 0.1));
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  overflow: hidden;
  height: 100%;

  @media only screen and (min-width: 768px) {
    position: absolute;
    width: 540px;
    padding: 40px 73px;
    border-radius: 8px;
    height: fit-content;
  }

  &::before {
    background-color: var(--transp-10);
    content: '';
    backdrop-filter: blur(50px);
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`;

export const Gradient = styled.div`
  z-index: -20;
  position: absolute;
  width: 454px;
  height: 454px;
  border-radius: 454px;
  background: rgba(47, 21, 176, 0.73);
  filter: blur(100px);
  inset: 0;
`;

export const CloseModalBtn = styled.button`
  display: none;
  position: absolute;
  right: 20px;
  top: 20px;
  border: none;
  outline: transparent;
  background-color: transparent;
  color: var(--white);
  cursor: pointer;
  transition: color 250ms ease-in-out;

  @media only screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover,
  &:focus {
    scale: 1.2;
  }
`;

export const CloseBtn = styled(GrClose)`
  margin: 0;
  padding: 0;
  width: 16px;
  height: 16px;
  color: currentColor;
  pointer-events: none;
`;

export const BtnCancel = styled.button`
  width: 280px;
  height: 50px;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 13px 10px;
  font-size: 18px;
  color: var(--text-button);
  box-shadow: 1px 9px 15px 0 rgba(0, 0, 0, 0.2);
  background-color: var(--white);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  margin: 20px auto 0;
  transition: scale 250ms ease-in-out, box-shadow 250ms ease-in-out;

  @media only screen and (min-width: 768px) {
    width: 300px;
  }
  &:hover {
    scale: 0.99;
    box-shadow: 3px 5px 8px 3px rgba(0, 0, 0, 0.5);
  }
`;

export const BtnSubmit = styled.button`
  width: 280px;
  height: 50px;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 13px 10px;
  font-size: 18px;
  color: var(--white);
  box-shadow: 1px 9px 15px 0 rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    97deg,
    #ffc727 -16.42%,
    #9e40ba 97.04%,
    #7000ff 150.71%
  );
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  margin: 40px auto 0;

  transition: scale 250ms ease-in-out, box-shadow 250ms ease-in-out;

  @media only screen and (min-width: 768px) {
    width: 300px;
  }

  &:hover {
    scale: 0.99;
    box-shadow: 3px 5px 8px 3px rgba(0, 0, 0, 0.5);
  }
`;
