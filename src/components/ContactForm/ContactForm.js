import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormContainer, Label, InputField, Button } from './ContactForm.styled';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    onAddContact({ name, number });

    resetForm();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        Name
        <InputField
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          autoComplete="off"
        />
      </Label>
      <Label>
        Number
        <InputField
          type="text"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          autoComplete="off"
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
