import styled from 'styled-components';

export const ListTab = styled.tr`
  list-style-type: none;
  height: 53px;

  &:not(:last-child) {
    @media only screen and (min-width: 768px) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.41);
    }
  }
`;

export const PData = styled.td`
  color: var(--white, #fbfbfb);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  padding-left: 20px;
  vertical-align: middle;
  width: 100px;
`;
export const PType = styled.td`
  color: var(--white, #fbfbfb);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  vertical-align: middle;
  width: 100px;
`;
export const PCategory = styled.td`
  color: var(--white, #fbfbfb);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  vertical-align: middle;
  width: 100px;
`;
export const PComment = styled.td`
  color: var(--white, #fbfbfb);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  vertical-align: middle;
  width: 150px;
`;
export const PSum = styled.td`
  color: var(--dashboard-text, #ff868d);
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-family: 'Poppins-SemiBold', sans-serif;
  line-height: normal;
  vertical-align: middle;
  width: 100px;
`;

export const Actions = styled.td`
  text-align: right;
  width: 150px;
  padding-right: 10px;
`;
export const ActionsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

export const PencilButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: color 250ms ease-in-out;

  color: var(--white);

  &:hover {
    scale: 1.2;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  height: 29px;
  width: 69px;
  cursor: pointer;
  border: none;
  background: var(
    --button-gradient,
    linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
  );

  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);

  color: var(--white, #fbfbfb);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media only screen and (min-width: 768px) {
    border-radius: 18px;
  }

  @media only screen and (min-width: 1280px) {
    border-radius: 20px;
  }

  &:hover {
    background: linear-gradient(
      97deg,
      #7000ff -16.42%,
      #9e40ba 97.04%,
      #ffc727 150.71%
    );
  }
`;
