import styles from './Footer.module.css';
import imgLogo from '../images/logo.svg';

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <img src={imgLogo} className={styles.logo} />
      <div className={styles.links}>
        <h4 className={styles.linksTitle}>Product</h4>
        <ul className={styles.linksList}>
          <li>
            <a href='#' className={styles.link}>
              Overview
            </a>
          </li>
          <li>
            <a href='#' className={styles.link}>
              Pricing
            </a>
          </li>
          <li>
            <a href='#' className={styles.link}>
              Marketplace
            </a>
          </li>
          <li>
            <a href='#' className={styles.link}>
              Features
            </a>
          </li>
          <li>
            <a href='#' className={styles.link}>
              Integrations
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.links}>
        <h4 className={styles.linksTitle}>Company</h4>
        <ul className={styles.linksList}>
          <li>
            <a href='#' className={styles.link}>
              About
            </a>
          </li>
          <li>
            <a href='#' className={styles.link}>
              Team
            </a>
          </li>
          <li>
            <a href='#' className={styles.link}>
              Blog
            </a>
          </li>
          <li>
            <a href='#' className={styles.link}>
              Careers
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.links}>
        <h4 className={styles.linksTitle}>Connect</h4>
        <ul className={styles.linksList}>
          <li>
            <a href='#' className={styles.link}>
              Contact
            </a>
          </li>
          <li>
            <a href='#' className={styles.link}>
              Newsletter
            </a>
          </li>
          <li>
            <a href='#' className={styles.link}>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
