import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import {
  GalleryItem,
  GalleryImage,
  ModalLagreImage,
} from './ImageGellaryItem.stylized';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { webformatURL, alt, largeImage } = this.props;
    const { showModal } = this.state;

    return (
      <>
        <GalleryItem onClick={this.toggleModal}>
          <GalleryImage
            src={webformatURL}
            alt={alt}
            width="350"
            loading="lazy"
          />
        </GalleryItem>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ModalLagreImage src={largeImage} alt={alt} loading="lazy" />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propType = {
  webformatURL: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
