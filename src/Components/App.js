import React from "react";
import ContactForm from "./contactForm/ContactForm";
import Filter from "./filter/Filter";
import ContactList from "./contactList/ContactList";
// import { useDispatch } from "react-redux";
// import phonebookActions from "../Redux/phonebook/phonebook-actions";

export default function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(phonebookActions.getContacts());
  // }, [dispatch]);

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

// const mapDispatchToProps = (dispatch) => ({
//   getContacts: () => dispatch(phonebookActions.getContacts()),
// });

// export default connect(null, mapDispatchToProps)(App);
