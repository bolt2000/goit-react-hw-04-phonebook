import css from './FilterContact.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={css.Label}>
      <span className={css.Span}>Find contacts by name</span>
      <input
        className={css.Input}
        type="text"
        value={value}
        onChange={onChange}
        name="filter"
      />
    </label>
  );
};

export default Filter;
