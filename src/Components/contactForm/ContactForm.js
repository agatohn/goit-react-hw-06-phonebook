import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

function ContactForm({ checkExist }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleContactData = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkExist({ name, number });
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.formLabel}>
        Name
        <input
          className={styles.formInput}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleContactData}
        />
      </label>

      <label className={styles.formLabel}>
        Number
        <input
          className={styles.formInput}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleContactData}
        />
      </label>

      <button type="submit" className={styles.formBtn}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  checkExist: PropTypes.func.isRequired,
};

export default ContactForm;
