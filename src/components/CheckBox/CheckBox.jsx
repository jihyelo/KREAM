import './CheckBox.scss';
const Checkbox = ({ type, disabled, checked, children }) => {
  return (
    <label>
      <input type={type} disabled={disabled} checked={checked} />
      {children}
    </label>
  );
};

export default Checkbox;
