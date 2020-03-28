const findContact = (contacts, contact) =>
  contacts.find(item => item.name === contact.name);

export default findContact;
