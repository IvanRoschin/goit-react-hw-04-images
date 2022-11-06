import { SkeletonCard } from './SkeletonCard';
import { SkeletonGallery } from './SkeletonGallery.stylized';

const SkeletonImageGallery = () => {
  return (
    <SkeletonGallery>
      <SkeletonCard cards={12}></SkeletonCard>
    </SkeletonGallery>
  );
};

export default SkeletonImageGallery;
