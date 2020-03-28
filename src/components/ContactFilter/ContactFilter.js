import React from 'react';
import PropTypes from 'prop-types';
import { FilterContainer, Label, InputField } from './ContactFilter.styled';

const ContactFilter = ({ value, onChangeFilter }) => (
  <FilterContainer>
    <Label>
      Find contacts by name
      <InputField type="text" value={value} onChange={onChangeFilter} />
    </Label>
  </FilterContainer>
);

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default ContactFilter;
