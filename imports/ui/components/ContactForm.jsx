import React, { useState } from 'react';
import { ContactsCollection } from '../../api/ContactsCollection';

export const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    inputURL: '',
  });
  const saveContact = () => {
    ContactsCollection.insert({
      name: state.name,
      email: state.email,
      inputURL: state.inputURL,
    });
    setState({ name: '', email: '', inputURL: '' });
  };
  //   const [name, setName] = useState(initialState: "");
  //   const [email, setEmail] = useState(initialState: "");
  //   const [inputURL, setinputURL] = useState(initialState: "");

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={state.name}
          onChange={e => setState({ ...state, name: e.target.value })}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={state.email}
          onChange={e => setState({ ...state, email: e.target.value })}
          type="email"
        />
      </div>
      <div>
        <label htmlFor="inputURL">Image URL</label>
        <input
          id="inputURL"
          value={state.inputURL}
          onChange={e => setState({ ...state, inputURL: e.target.value })}
          type="text"
        />
      </div>
      <div>
        <button type="button" onClick={saveContact}>
          Save Contact
        </button>
      </div>
    </form>
  );
};
