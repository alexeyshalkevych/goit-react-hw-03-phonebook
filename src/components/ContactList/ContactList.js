import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import { List, ListItem } from './ContactList.styled';

const ContactList = ({ items, onDeleteContact }) =>
  items.length > 0 && (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
          <Contact
            item={item}
            onDeleteContact={() => onDeleteContact(item.id)}
          />
        </ListItem>
      ))}
    </List>
  );

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
