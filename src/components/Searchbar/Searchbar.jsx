import { Component } from 'react';
import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';
import { toast } from 'react-toastify';
import {
  SearchbarHeader,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchFormlabel,
} from './Searchbar.stylized';

export default class Searchbar extends Component {
  static defaultProps = {
    name: PropTypes.string.isRequired,
  };

  state = {
    name: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() === '') {
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
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;
    return (
      <SearchbarHeader onSubmit={this.handleSubmit}>
        <SearchForm>
          <SearchFormButton type="submit">
            <BiSearch size={16} />
            <SearchFormlabel>Search</SearchFormlabel>
          </SearchFormButton>
          <SearchFormInput
            className="input"
            type="text"
            name="name"
            value={name}
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
