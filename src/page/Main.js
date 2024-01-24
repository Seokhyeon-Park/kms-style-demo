import style from '../style/page/Main.module.css';
import LoginContainer from '../component/LoginContainer';
import AppListConatiner from '../component/AppListContainer';
import SearchContainer from '../component/SearchContainer';

function Main() {
  return (
    <div className={style.Main}>
      <LoginContainer />
      {/* <AppListConatiner /> */}
      {/* <SearchContainer /> */}
    </div>
  );
}

export default Main;
