import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
  state = {
    // images: '',
  };

  render() {
    console.log(this.props, 'Eto prishlo v item');
    console.log(this.props.webformatURL, 'Eto ssilka');
    const { webformatURL, alt } = this.props;

    return (
      <li className="gallery-item">
        <img src={webformatURL} alt={alt} />
      </li>
    );
  }
}

// ImageGalleryItem.propType = {
//   id: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   alt: PropTypes.string.isRequired,
// };
