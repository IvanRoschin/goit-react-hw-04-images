import { RotatingLines } from 'react-loader-spinner';

export default function ImagesPendungView() {
  return (
    <div role="alert">
      <RotatingLines
        strokeColor="red"
        strokeWidth="3"
        animationDuration="0.75"
        width="32"
        visible={true}
      />
      Loading
    </div>
  );
}
