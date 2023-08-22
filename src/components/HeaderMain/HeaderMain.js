import { CiSearch } from 'react-icons/ci';
import './HeaderMain.scss';

const HeaderMain = ({ center, right }) => {
  return (
    <div className="headerMain">
      <h1 className="logo">KREAM</h1>
      <div className="center">{center}</div>
      <div className="right">{right}</div>
    </div>
  );
};
export default HeaderMain;
