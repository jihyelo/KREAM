import './CheckBox.scss';
const Checkbox = ({ disabled, checked, children, onChange, value }) => {
  return (
    <label>
      <input
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        value={value}
      />
      {children}
    </label>
  );
};

export default Checkbox;
