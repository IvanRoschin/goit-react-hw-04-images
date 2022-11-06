import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGellaryItem.stylized';

export default class ImageGalleryItem extends Component {
  state = {
    // images: '',
  };

  render() {
    const { webformatURL, tags } = this.props;

    return (
      <GalleryItem>
        <GalleryImage src={webformatURL} alt={tags} />
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propType = {
  id: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
