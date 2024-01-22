import style from '../style/component/Header.module.css';

const Header = () => {
  return (
    <div className={style.Header}>
      <img src="/img/pig.png" alt="" className={style.Logo} />
      <h1 className={style.CompanyName}>StupidPigs Platform</h1>
    </div>
  );
};

export default Header;