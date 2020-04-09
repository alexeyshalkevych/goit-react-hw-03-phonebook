const filterContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

const findContact = (contacts, contact) =>
  contacts.find(item => item.name === contact.name);

const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    throw new Error();
  }
};

const get = key => {
  try {
    const items = localStorage.getItem(key);

    return items ? JSON.parse(items) : null;
  } catch (err) {
    throw new Error();
  }
};

export { filterContacts, findContact, save, get };
