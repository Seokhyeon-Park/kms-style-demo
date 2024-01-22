import style from '../style/component/AppListContainer.module.css';
import Header from '../component/Header';

function AppListConatiner() {
  return (
    <div className={style.mainContainer}>
      <div className={style.HeaderConatiner}>
        <Header />
      </div>

      <div className={style.AppsConatiner}>
          
      </div>
    </div>
  );
}

export default AppListConatiner;