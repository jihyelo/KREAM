import './CheckBox.scss';
const CheckBox = ({
  name,
  disabled,
  checked,
  children,
  onChange,
  checkItemHandler,
}) => {
  const checkHandled = e => {
    console.log('checkHandled');
    checkItemHandler(e.target.name, e.target.checked);
  };
  return (
    <label>
      <input
        type="checkbox"
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={checkHandled}
      />
      {name}
    </label>
  );
};

export default CheckBox;
