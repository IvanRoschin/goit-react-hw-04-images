import { useState } from 'react';
// import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormlabel,
} from './Searchbar.stylized';

export default function Searchbar({ onSubmit }) {
  const [request, setRequest] = useState('');

  const handleChange = e => {
    setRequest(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (request.trim() === '') {
      return toast.error('Please, type search', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
    onSubmit(request);
    setRequest('');
  };

  return (
    <SearchbarHeader onSubmit={handleSubmit}>
      <SearchForm>
        <SearchFormButton type="submit">
          <BiSearch size={16} />
          <SearchFormlabel>Search</SearchFormlabel>
        </SearchFormButton>
        <SearchFormInput
          type="text"
          name="request"
          value={request}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </SearchForm>
    </SearchbarHeader>
  );
}
