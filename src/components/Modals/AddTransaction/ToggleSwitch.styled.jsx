import styled from 'styled-components';
import minusIcon from '../../../assets/minus.svg';
import plusIcon from '../../../assets/plus.svg';

export const TransactionToggleWrap = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const LabelToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
`;
export const InputToggle = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked + ::before {
    transform: translateX(40px);
    background-color: var(--dashboard-text);
    box-shadow: 0 6px 15px 0 rgba(255, 134, 141, 0.5);
    content: '';
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 50px;
    background-image: url(${minusIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const SpanToggle = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: #fff;
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &::before {
    position: absolute;
    content: '';
    left: -2px;
    top: -2px;
    width: 44px;
    height: 44px;
    border-radius: 44px;
    background: var(--yellow);
    box-shadow: 0 6px 15px 0 rgba(255, 199, 39, 0.5);
    transition: transform 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 50px;
    background-image: url(${plusIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
`;
export const Expense = styled.p`
  color: ${({ $active }) => ($active ? '#ff868d' : '#FFFFFF99')};
  font-size: 16px;
  font-family: 'Poppins-SemiBold', sans-serif;
`;

export const Income = styled.p`
  color: ${({ $active }) => ($active ? '#ffb627' : '#FFFFFF99')};
  font-size: 16px;
  font-family: 'Poppins-SemiBold', sans-serif;
`;
