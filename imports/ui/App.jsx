import React from 'react';
import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactList';
import { Header } from './components/Header';

// Contact: name, email, imageURL
export const App = () => (
  <div>
    <Header />
    <div className="min-h-full">
      <div className="max-w-4xl mx-auto p-2">
        <ContactForm />
        <ContactList />
      </div>
    </div>
  </div>
);
