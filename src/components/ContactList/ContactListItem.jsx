import PropTypes from 'prop-types';
import {
  ContactListLi,
  ContactListData,
  ContactListButton,
} from './ContactListItem.stylized';

export const ContactListItem = ({ id, name, number, deleteContact }) => {
  return (
    <ContactListLi key={id}>
      <ContactListData>
        {name} - {number}
      </ContactListData>
      <ContactListButton type="button" onClick={() => deleteContact(id)}>
        Delete
      </ContactListButton>
    </ContactListLi>
  );
};

ContactListItem.propType = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
