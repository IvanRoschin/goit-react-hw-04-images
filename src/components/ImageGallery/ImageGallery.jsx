// import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul>
      ImageGallery
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            id={id}
            key={webformatURL}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ul>
  );
};

// export const ImageGallery =  ImageGallery({ images })  => {
//   return (
//     <ul>
//       {images.map(({ id, webformatURL, largeImageURL }) => {
//         return (
//           <ImageGalleryItem
//             id={id}
//             key={webformatURL}
//             webformatURL={webformatURL}
//             largeImageURL={largeImageURL}
//           />
//         );
//       })}
//     </ul>
//   );
// }
