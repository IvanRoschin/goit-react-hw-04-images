import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import {
  GalleryItem,
  GalleryImage,
  ModalLagreImage,
} from './ImageGellaryItem.stylized';

const ImageGalleryItem = ({ webformatURL, tags, largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <GalleryItem onClick={() => setShowModal(!showModal)}>
        <GalleryImage
          src={webformatURL}
          alt={tags}
          width="350"
          loading="lazy"
        />
      </GalleryItem>
      {showModal && (
        <Modal onClose={() => setShowModal(!showModal)}>
          <ModalLagreImage src={largeImageURL} alt={tags} loading="lazy" />
        </Modal>
      )}
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propType = {
  webformatURL: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
