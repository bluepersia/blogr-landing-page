import styles from './Header.module.css';
import imgLogo from '../images/logo.svg';

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <img src={imgLogo} className={styles.logo} />
        <nav>
          <ul className={styles.navlist}>
            <li>
              <a href='#' className={styles.navlink}>
                Product
              </a>
            </li>
            <li>
              <a href='#' className={styles.navlink}>
                Company
              </a>
            </li>
            <li>
              <a href='#' className={styles.navlink}>
                Connect
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.loginBtns}>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.registerBtn + ' btn-white'}>Sign Up</button>
        </div>
      </div>
      <div className={styles.intro}>
        <h1 className={styles.title}>A modern publishing platform</h1>
        <p className={styles.body}>
          Grow your audience and build your online brand
        </p>
        <div className={styles.introBtns}>
          <button className={styles.startBtn + ' btn-white'}>
            Start for Free
          </button>
          <button className={styles.learnBtn}>Learn More</button>
        </div>
      </div>
    </header>
  );
}
