import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

export class FormContacts extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, actions) => {
    actions.setSubmitting(false);
    console.log(values);
  };

  render() {
    return (
      <Formik initialValues={this.state} onSubmit={this.handleSubmit}>
        {({ isSubmittin }) => {
          return (
            <Form>
              <label>
                <p>Name</p>
                <Field
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </label>
              <label>
                <p>Number</p>
                <Field
                  type="tel"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              </label>
              <button type="submit" disabled={this.isSubmittin}>
                Add contact
              </button>
              ;
            </Form>
          );
        }}
      </Formik>
    );
  }
}
