import styled from 'styled-components';

export const HomeTab = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  display: none;

  @media only screen and (min-width: 768px) {
    width: 99%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 1280px) {
    width: 100%;
  }
`;

export const HomeHeader = styled.thead`
  height: 56px;
  border-radius: 8px;
  background: #332055;

  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);

  display: block;
`;

export const HomeRow = styled.tr`
  border-radius: 8px;
  overflow: hidden;
`;

export const TitleData = styled.th`
  color: var(--white, #fbfbfb);
  font-size: 16px;
  font-style: normal;
  font-family: 'Poppins-SemiBold', sans-serif;
  line-height: normal;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  text-align: left;
  padding-left: 20px;
  width: 100px;
  height: 56px;
`;

export const TitleType = styled.th`
  color: var(--white, #fbfbfb);
  font-size: 16px;
  font-style: normal;
  font-family: 'Poppins-SemiBold', sans-serif;
  line-height: normal;
  text-align: center;
  width: 100px;
`;

export const TitleCategory = styled.th`
  color: var(--white, #fbfbfb);
  font-size: 16px;
  font-style: normal;
  font-family: 'Poppins-SemiBold', sans-serif;
  line-height: normal;
  text-align: left;
  width: 100px;
`;

export const TitleComment = styled.th`
  color: var(--white, #fbfbfb);
  font-size: 16px;
  font-style: normal;
  font-family: 'Poppins-SemiBold', sans-serif;
  line-height: normal;
  text-align: left;
  width: 150px;
`;

export const TitleSum = styled.th`
  color: var(--white, #fbfbfb);
  font-size: 16px;
  font-style: normal;
  font-family: 'Poppins-SemiBold', sans-serif;
  line-height: normal;
  text-align: right;
  width: 100px;
`;

export const TitleActions = styled.th`
  color: var(--white, #fbfbfb);
  font-size: 16px;
  font-style: normal;
  font-family: 'Poppins-SemiBold', sans-serif;
  line-height: normal;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  width: 100px;
`;

export const ListTransaction = styled.tbody`
  height: 600px;

  display: block;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #7d31a0;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #942cc5;
  }

  @media only screen and (min-width: 768px) {
    max-height: 600px;
    overflow-y: scroll;
  }
  @media only screen and (min-width: 1280px) {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 7px;
      height: 7px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.5);
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    }
  }
`;

export const TransactionCardList = styled.ul`
  margin-top: 20px;
  padding: 0;
  max-width: max-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  justify-content: center;
  align-items: center;
 
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const NoTransactionStyled = styled.p`
  color: var(--white);
  font-family: 'Poppins-SemiBold', sans-serif;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
  text-align: center;
  width: 100%;

  @media only screen and (min-width: 768px) {
    position: absolute;
    top: 80px;
  }
`;
