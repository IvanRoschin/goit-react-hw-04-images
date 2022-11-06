import ImageGallery from 'components/ImageGallery';
import SkeletonImage from './SkeletonImage.png';

export const SkeletonImageGallery = () => {
  const imagesData = {
    webformatURL: SkeletonImage,
    tags: [],
    id: '',
    largeImageURL: SkeletonImage,
  };

  return <ImageGallery images={imagesData} />;
};
