import { Component } from 'react';
import PropTypes from 'prop-types';
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

export default class Searchbar extends Component {
  static defaultProps = {
    request: PropTypes.string.isRequired,
  };

  state = {
    request: '',
  };

  handleChange = e => {
    this.setState({
      request: e.target.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.request.trim() === '') {
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
    this.props.onSubmit(this.state.request);
    this.setState({ request: '' });
  };

  render() {
    const { request } = this.state;
    return (
      <SearchbarHeader onSubmit={this.handleSubmit}>
        <SearchForm>
          <SearchFormButton type="submit">
            <BiSearch size={16} />
            <SearchFormlabel>Search</SearchFormlabel>
          </SearchFormButton>
          <SearchFormInput
            type="text"
            name="name"
            value={request}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}
