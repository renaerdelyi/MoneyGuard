import styled from 'styled-components';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h2`
  margin-bottom: 34px;
  text-align: center;
  color: var(--white);
  font-size: 24px;
  font-weight: 400;

  @media only screen and (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 42px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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

  @media only screen and (min-width: 768px) {
    text-align: center;
    padding-left: 0;
  }

  &::placeholder {
    color: var(--white-60);
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
  font-family: 'Poppins-SemiBold', sans-serif;
  font-weight: 400;
  border: none;
  border-bottom: 1px solid var(--white-40);
  background-color: transparent;
  color: var(--white);
  outline: transparent;
  width: 280px;

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
    align-items: baseline;
    gap: 32px;
    justify-content: center;
  }

  @media only screen and (min-width: 768px) {
    outline: transparent;
  }

  input::placeholder {
    color: var(--white-60);
    text-align: start;
    font-size: 18px;
    font-family: 'Poppins-SemiBold', sans-serif;
    font-weight: 700;
  }
`;

// ==========ERROR==========
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

// ===========TYPE==========
export const TypeWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  color: #e0e0e0;
`;

export const Expense = styled.p`
  color: ${({ $active }) => ($active ? '#ff868d' : '#E0E0E0')};
  font-size: 16px;
  font-family: 'Poppins-SemiBold', sans-serif;
`;

export const Income = styled.p`
  color: ${({ $active }) => ($active ? '#ffb627' : '#E0E0E0')};
  font-size: 16px;
  font-family: 'Poppins-SemiBold', sans-serif;
`;
