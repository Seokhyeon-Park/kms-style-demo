
import style from '../style/component/AppListContainer.module.css';
import Header from './Header';
import AppIcon from './AppIcon';

function AppListConatiner() {
  return (
    <div className={style.mainContainer}>
      <div className={style.HeaderConatiner}>
        <Header />
      </div>

      <div className={style.AppsConatiner}>
          <AppIcon appName='Search' backgroundImage='/img/search.png' />
          <AppIcon appName='Sync' backgroundImage='/img/sync.png' />
          <AppIcon appName='Settings' backgroundImage='/img/settings.png' />
      </div>
    </div>
  );
}

export default AppListConatiner;