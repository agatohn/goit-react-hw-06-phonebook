import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ inputValue, handleFilter }) => {
  return (
    <>
      <label className={styles.filterLabel}>
        Find contacts by name
        <input
          className={styles.filterInput}
          type="text"
          value={inputValue}
          onChange={handleFilter}
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
