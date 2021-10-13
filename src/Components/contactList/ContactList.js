import React from "react";
// import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import phonebookActions from "../../Redux/phonebook/phonebook-actions";
import {
  getContacts,
  getFilter,
} from "../../Redux/phonebook/phoneboock-selectors";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

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
            onClick={() => dispatch(phonebookActions.deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// const mapStateToProps = (state) => ({
//   contacts: state.phonebook.contacts,
//   filter: state.phonebook.filter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   handleDelete: (id) => dispatch(phonebookActions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   handleDelete: PropTypes.func.isRequired,
// };
