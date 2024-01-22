import style from '../style/component/LoginContainer.module.css';

function LoginContainer() {
  return (
    <div className={style.LoginContainer}>
      <div className={style.LoginBox}>
        <div className={style.HeaderLine}>
          <img src="/img/pig.png" alt="" className={style.Logo} />
          <h2 className={style.LoginHeading}>StupidPigs Platform</h2>
        </div>

        <form className={style.LoginForm}>
          <label htmlFor="username" className={style.LoginLabel}>
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className={style.LoginInput}
            placeholder="Enter your username"
          />

          <label htmlFor="password" className={style.LoginLabel}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={style.LoginInput}
            placeholder="Enter your password"
          />

          <button type="submit" className={style.LoginButton}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginContainer;