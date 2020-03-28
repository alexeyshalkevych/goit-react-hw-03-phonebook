import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormContainer, Label, InputField, Button } from './ContactForm.styled';

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '',
      number: '',
    });
  }

  render() {
    const { name, number } = this.state;

    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <Label>
          Name
          <InputField
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            autoComplete="off"
          />
        </Label>
        <Label>
          Number
          <InputField
            type="text"
            name="number"
            value={number}
            onChange={this.handleChange}
            autoComplete="off"
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormContainer>
    );
  }
}
