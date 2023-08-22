import './InputBox.scss';

const InputBox = ({
  type,
  className,
  placeholder,
  errorMessage,
  inputTitle,
  onChange,
}) => {
  return (
    <div className="inputBox">
      <p className="inputTitle">{inputTitle}</p>
      <div className="inputItem">
        <input
          type={type}
          className={className}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
      <p className="inputError">{errorMessage}</p>
    </div>
  );
};

export default InputBox;
