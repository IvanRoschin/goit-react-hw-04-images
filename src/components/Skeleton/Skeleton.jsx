import { RotatingLines } from 'react-loader-spinner';
import ContentLoader from 'react-content-loader';
import { Spinner, LoadingText } from './Skeleton.stylized';

const imagesSkeleton = () => {
  return (
    <div>
      <Spinner role="alert">
        <RotatingLines
          strokeColor="#3f51b5"
          strokeWidth="3"
          animationDuration="0.75"
          width="42"
          visible={true}
        />
        <LoadingText>Loading...</LoadingText>
      </Spinner>

      <ContentLoader
        speed={2}
        width={1487}
        height={600}
        viewBox="0 0 1487 600"
        backgroundColor="#fff"
        foregroundColor="#C0C0C0"
        style={{ paddingLeft: '20px' }}
      >
        <rect x="0" y="0" rx="3" ry="3" width="365" height="260" />
        <rect x="373" y="0" rx="3" ry="3" width="365" height="260" />
        <rect x="746" y="0" rx="3" ry="3" width="365" height="260" />
        <rect x="1119" y="0" rx="3" ry="3" width="365" height="260" />
        <rect x="0" y="277" rx="3" ry="3" width="365" height="260" />
        <rect x="373" y="277" rx="3" ry="3" width="365" height="260" />
        <rect x="746" y="277" rx="3" ry="3" width="365" height="260" />
        <rect x="1119" y="277" rx="3" ry="3" width="365" height="260" />
      </ContentLoader>
    </div>
  );
};

export default imagesSkeleton;
