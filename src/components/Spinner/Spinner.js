import { RotatingLines } from 'react-loader-spinner';
import { SpinnerStyle } from './Spinner.styled';

export const SpinnerLoader = () => {
  return (
    <SpinnerStyle>
      <RotatingLines
        strokeColor="lavender"
        strokeWidth="4"
        animationDuration="0.8"
        width="96"
        visible={true}
      />
    </SpinnerStyle>
  );
};
