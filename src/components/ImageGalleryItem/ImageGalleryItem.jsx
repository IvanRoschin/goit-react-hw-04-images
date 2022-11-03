import PropTypes from 'prop-types';
import {
  ContactListLi,
  ContactListData,
  ContactListButton,
} from './ImageGellaryItem.stylized';

export const ImageGalleryItem = ({ id, url, alt }) => {
  return (
    <li className="gallery-item" key={id}>
      <img src="" alt="" />
    </li>
  );
};

ImageGalleryItem.propType = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
