import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    return (
      <div>
        <h1>ImageGallery</h1>
        <p>{this.props.request}</p>
      </div>
      // <ImageGallery>
      //   {images.map(({ id, url, alt }) => {
      //     return <ImageGalleryItem id={id} url={url} alt={alt} key={id} />;
      //   })}
      // </ImageGallery>
    );
  }
}

// ImageGallery.propType = {
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//       alt: PropTypes.string.isRequired,
//     }).isRequired
//   ),
// };
