export const ADD_CONTACT = 'ADD_CONTACT';
export const EDIT_CONTACT = 'EDIT_CONTACT';

export const addContact = (name, question, answer) => ({
  type: ADD_CONTACT,
  name,
  question,
  answer,
});

export const editContact = (index, name, question, answer) => ({
  type: EDIT_CONTACT,
  index,
  name,
  question,
  answer,
});
