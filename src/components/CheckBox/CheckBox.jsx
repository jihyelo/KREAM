import './CheckBox.scss';

const CheckBox = ({ name, disabled, checked, onChange, checkItemHandler }) => {
  const checkHandled = e => {
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
        className="checkBox"
      />
      {name}
    </label>
  );
};

export default CheckBox;
