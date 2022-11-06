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
    console.log(this.props.images);
    const { webformatURL, tags, largeImageURL } = this.props;
    const { showModal } = this.state;
    console.log(webformatURL, 'webformatURL');
    console.log(tags, 'alt');
    console.log(largeImageURL, 'largeImage');

    return (
      <>
        <GalleryItem onClick={this.toggleModal}>
          <GalleryImage
            src={webformatURL}
            alt={tags}
            width="350"
            loading="lazy"
          />
        </GalleryItem>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ModalLagreImage src={largeImageURL} alt={tags} loading="lazy" />
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
