import React, { useState, useEffect } from "react";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify([...contacts]));
  }, [contacts]);

  const checkExistAndAdd = (newContact) => {
    contacts.some(
      (contact) =>
        contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase() ||
        contacts.some((contact) => contact.number === newContact.number)
    )
      ? alert(
          `Friend ${newContact.name} or number ${newContact.number} is alredy exist`
        )
      : setContacts([...contacts, { ...newContact, id: uuidv4() }]);
  };

  const handleFilter = (e) => {
    setFilter(e.currentTarget.value);
  };
  const filteredContacts = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  const handleDelete = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm checkExist={checkExistAndAdd} />

      <h2>Contacts</h2>
      <Filter inputValue={filter} handleFilter={handleFilter} />
      <ContactList contacts={filteredContacts()} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
