import React from "react";
// import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { useSelector, useDispatch } from "react-redux";
import phonebookActions from "../../Redux/phonebook/phonebook-actions";
import { getFilter } from "../../Redux/phonebook/phoneboock-selectors";

export default function Filter() {
  const inputValue = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <label className={styles.filterLabel}>
        Find contacts by name
        <input
          className={styles.filterInput}
          type="text"
          value={inputValue}
          onChange={(e) =>
            dispatch(phonebookActions.changeFilter(e.target.value))
          }
        />
      </label>
    </>
  );
}

// const mapStateToProps = (state) => ({
//   inputValue: state.phonebook.filter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   handleFilter: (e) => dispatch(phonebookActions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);

// Filter.propTypes = {
//   inputValue: PropTypes.string.isRequired,
//   handleFilter: PropTypes.func.isRequired,
// };
