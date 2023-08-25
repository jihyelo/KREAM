import './CheckBox.scss';
const CheckBox = ({
  id,
  disabled,
  checked,
  children,
  onChange,
  checkItemHandler,
}) => {
  const checkHandled = e => {
    console.log('checkHandled');
    checkItemHandler(e.target.id, e.target.checked);
  };
  return (
    <label>
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        checked={checked}
        onChange={checkHandled}
      />
      {id}
    </label>
  );
};

export default CheckBox;
