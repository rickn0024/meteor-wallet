import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { ContactsCollection } from './ContactsCollection';

Meteor.methods({
  'contacts.insert'({ name, email, inputURL }) {
    if (!name) {
      check(name, String);
      check(email, String);
      check(inputURL, String);
      throw new Meteor.Error('Name is required');
    }
    return ContactsCollection.insert({
      name,
      email,
      inputURL,
      createdAt: new Date(),
    });
  },
  'contacts.remove'({ contactId }) {
    check(contactId, String);
    return ContactsCollection.remove(contactId);
  },
});
