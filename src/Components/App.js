import React, { useEffect } from "react";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
import { connect } from "react-redux";
// import { v4 as uuidv4 } from "uuid";

function App({ contacts }) {
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify([...contacts]));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
const mapStateToProps = (state) => ({
  contacts: state.phonebook.contacts,
  filter: state.phonebook.filter,
});

export default connect(mapStateToProps)(App);
