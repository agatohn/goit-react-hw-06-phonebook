import React, { useEffect } from "react";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
import { connect } from "react-redux";
import phonebookActions from "../Redux/phonebook/phonebook-actions";

function App({ getContacts }) {
  useEffect(() => {
    getContacts();
  }, [getContacts]);

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

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch(phonebookActions.getContacts()),
});

export default connect(null, mapDispatchToProps)(App);
