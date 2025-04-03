import styled from 'styled-components';

import { GrClose } from 'react-icons/gr';
import Select from 'react-select';

export const Backdrop = styled.div`
  position: fixed;
  flex-direction: column;
  align-items: space-between;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
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

export const Modal = styled.div`
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
  justify-content: space-around;

  @media only screen and (min-width: 768px) {
    position: absolute;
    width: 540px;
    height: 589px;
    padding: 40px 73px;
    border-radius: 8px;
    height: fit-content;
    left: 50%;
    transform: translateX(-50%);
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

export const Title = styled.h1`
  margin-bottom: 34px;
  color: var(--white);
  font-size: 24px;
  font-weight: 400;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 42px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
`;

export const Input = styled.input`
  padding-left: 20px;
  padding-bottom: 8px;
  width: 280px;
  border: none;
  border-bottom: 1px solid var(--white-40);

  outline: none;
  background: transparent;
  color: var(--white-60);
  font-size: 18px;
  font-family: 'Poppins-SemiBold', sans-serif;
  font-weight: 600;

  @media only screen and (min-width: 768px) {
    text-align: center;
    padding-left: 0;
  }

  &::placeholder {
    color: var(--white-60);
    font-family: 'Poppins-SemiBold', sans-serif;
    @media only screen and (min-width: 768px) {
      transform: translateX(40%);
    }
  }

  @media only screen and (min-width: 768px) {
    width: 181px;
  }
`;

export const CommentInputStyled = styled.input`
  padding-left: 20px;
  padding-bottom: 52px;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  width: 280px;
  border: none;
  border-bottom: 1px solid var(--white-40);
  background-color: transparent;
  color: var(--white-60);
  outline: transparent;
  @media only screen and (min-width: 768px) {
  }

  &::placeholder {
    color: var(--white-60);
    font-size: 18px;
    font-weight: 400;
  }
  @media only screen and (min-width: 768px) {
    padding-left: 8px;
    padding-bottom: 8px;
    width: 394px;
  }
`;

export const WrapSumCalendar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 768px) {
    outline: transparent;
    align-items: baseline;
  }

  input::placeholder {
    color: var(--white-60);
    text-align: start;
    font-size: 18px;
    font-family: 'Poppins-Bold', sans-serif;
    font-weight: 700;
    @media only screen and (min-width: 768px) {
    }
  }
`;

// ==========ERROR
export const InputErrorWrap = styled.div`
  height: 45px;
  margin-bottom: 24px;
  @media only screen and (min-width: 768px) {
  }
`;

export const ErrorMessage = styled.p`
  color: rgb(255, 134, 141);
  font-size: 14px;
  font-weight: 500;
  padding-left: 20px;

  @media only screen and (min-width: 768px) {
    padding-left: 12px;
  }
`;

//==============BUTTONS
export const ButtonsWrap = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const BtnAdd = styled.button`
  width: 280px;
  height: 50px;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 13px 10px;
  font-size: 18px;
  color: var(--white);
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  background: linear-gradient(
    97deg,
    #ffc727 -16.42%,
    #9e40ba 97.04%,
    #7000ff 150.71%
  );
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  transition: scale 250ms ease-in-out, box-shadow 250ms ease-in-out;

  @media only screen and (min-width: 768px) {
    width: 300px;
  }

  &:hover,
  &:focus {
    scale: 0.99;
    box-shadow: 3px 5px 8px 3px rgba(0, 0, 0, 0.5);
  }
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
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  background-color: var(--white);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  transition: scale 250ms ease-in-out, box-shadow 250ms ease-in-out;

  @media only screen and (min-width: 768px) {
    width: 300px;
  }

  &:hover,
  &:focus {
    scale: 0.99;
    box-shadow: 3px 5px 8px 3px rgba(0, 0, 0, 0.5);
  }
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
  transition: color 250ms ease-in-out;
  cursor: pointer;
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
export const StyledSelect = styled(Select)`
  width: 280px;

  @media only screen and (min-width: 768px) {
    width: 394px;
  }
`;
