import './LoginSignUpButton.scss';

const LoginSignUpButton = ({ className, onClick, disabled, buttonText }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {buttonText}
    </button>
  );
};

export default LoginSignUpButton;
