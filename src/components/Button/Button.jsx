import PropTypes from 'prop-types';
import { LoadButton } from './Button.stylized';

export default function loadMoreButton({ onClick }) {
  return (
    <LoadButton type="button" onClick={onClick}>
      Load more
    </LoadButton>
  );
}

loadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
