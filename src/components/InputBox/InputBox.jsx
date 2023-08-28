import './InputBox.scss';

const InputBox = ({
  type,
  className,
  name,
  placeholder,
  errorMessage,
  inputTitle,
  onChange,
  value,
  onClick,
}) => {
  return (
    <div className="inputBox">
      <p className="inputTitle">{inputTitle}</p>
      <div className="inputItem">
        <input
          type={type}
          className={className}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onClick={onClick}
        />
      </div>
      <p className="inputError">{errorMessage}</p>
    </div>
  );
};

export default InputBox;
