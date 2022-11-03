import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGallery>
      {images.map(({ id, url, alt }) => {
        return <ImageGalleryItem id={id} url={url} alt={alt} key={id} />;
      })}
    </ImageGallery>
  );
};

ImageGallery.propType = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired
  ),
};
