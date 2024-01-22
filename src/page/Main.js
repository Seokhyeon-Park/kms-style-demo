import style from '../style/page/Main.module.css';
import LoginContainer from '../component/LoginContainer';
import AppListConatiner from '../component/AppListContainer';

function Main() {
  return (
    <div className={style.Main}>
      {/* <LoginContainer /> */}
      <AppListConatiner />
    </div>
  );
}

export default Main;
