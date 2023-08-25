import './CheckBox.scss';
const Checkbox = ({ disabled, checked, children, onChange, name, value }) => {
  return (
    <label>
      <input
        type="checkbox"
        name={name}
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
