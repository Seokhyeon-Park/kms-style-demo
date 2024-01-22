import style from '../style/page/Main.module.css';
import LoginContainer from '../component/LoginContainer';

function Main() {
  return (
    <div className={style.Main}>
      <LoginContainer />
    </div>
  );
}

export default Main;
