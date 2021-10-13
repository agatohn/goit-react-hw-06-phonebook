import React from "react";
// import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import phonebookActions from "../../Redux/phonebook/phonebook-actions";

const ContactList = ({ contacts, handleDelete, filter }) => {
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactListItem}>
          <p className={styles.contactsName}>
            {name}: {number}
          </p>

          <button
            className={styles.contactsBtn}
            type="button"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.phonebook.contacts,
  filter: state.phonebook.filter,
});

const mapDispatchToProps = (dispatch) => ({
  handleDelete: (id) => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   handleDelete: PropTypes.func.isRequired,
// };
