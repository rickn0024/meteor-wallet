import React from 'react';
import { ContactsCollection } from '../../api/ContactsCollection';
import { useTracker } from 'meteor/react-meteor-data';

export const ContactList = () => {
  const contacts = useTracker(() => {
    return ContactsCollection.find({}, { sort: { createdAt: -1 } }).fetch(); // Tracker
  });
  const removeContact = (event, _id) => {
    event.preventDefault();
    Meteor.call('contacts.remove', { contactId: _id });
    if (errorResponse) {
      showError({ message: errorResponse.message });
    } else {
      setName('');
      setEmail('');
      setInputURL('');
      showSuccess({ message: 'Contact Saved' });
    }
  };
  return (
    <div>
      <div className="mt-10">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
          Contact List
        </h3>
        <ul
          role="list"
          className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
        >
          {contacts.map(contact => (
            <li
              key={contact.email}
              className="py-4 flex items-center justify-between space-x-3"
            >
              <div className="min-w-0 flex-1 flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={contact.inputURL}
                    alt=""
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {contact.name}
                  </p>
                  <p className="text-sm font-medium text-gray-500 truncate">
                    {contact.email}
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    onClick={event => removeContact(event, contact._id)}
                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Remove
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
