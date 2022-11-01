import React from 'react';
import PropTypes from 'prop-types';

import {
  FilterContainer,
  Filterlabel,
  FilterInput,
} from './Filter.stylized.jsx';

export const Filter = ({ findContact }) => {
  return (
    <FilterContainer>
      <Filterlabel>Find contacts by name</Filterlabel>
      <FilterInput type="text" onChange={findContact} />
    </FilterContainer>
  );
};

Filter.propType = {
  findContact: PropTypes.func.isRequired,
};
