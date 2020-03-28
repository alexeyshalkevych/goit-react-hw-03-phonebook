import React from 'react';
import PropTypes from 'prop-types';
import {
  ContactContainer,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './Contact.styled';

const Contact = ({ name, number, onDeleteContact }) => (
  <ContactContainer>
    <ContactName>{name}</ContactName>
    <ContactNumber>{number}</ContactNumber>
    <DeleteButton type="button" onClick={onDeleteContact}>
      delete
    </DeleteButton>
  </ContactContainer>
);

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
