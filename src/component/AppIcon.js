import React from 'react';
import style from '../style/component/AppIcon.module.css'

function AppIcon({ appName, backgroundImage }) {
  return (
    <div className={style.AppContainer}>
      <img src={backgroundImage} className={style.AppIcon} />
      <a className={style.AppName}>{appName}</a>
    </div>
  );
}

export default AppIcon;