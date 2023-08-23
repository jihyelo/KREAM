import './LoginSignUpButton.scss';

const LoginSignUpButton = ({ className, onClick, disabled, children }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default LoginSignUpButton;
