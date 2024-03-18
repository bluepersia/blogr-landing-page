import styles from './Header.module.css';
import imgLogo from '../images/logo.svg';
import imgMenu from '../images/icon-hamburger.svg';
import { useEffect, useRef, useState } from 'react';

enum OpenEnum {
  Product = 'product',
  Company = 'company',
  Connect = 'connect',
  Mobile = 'mobile',
}
type OpenData = {
  [key: string]: boolean;
  product: boolean;
  company: boolean;
  connect: boolean;
  mobile: boolean;
};

export default function Header(): JSX.Element {
  const [open, setOpen] = useState<OpenData>({
    product: false,
    company: false,
    connect: false,
    mobile: false,
  });
  const refProduct = useRef<HTMLAnchorElement>(null);
  const refCompany = useRef<HTMLAnchorElement>(null);
  const refConnect = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    document.addEventListener('click', closeAllMenus);
    window.addEventListener('resize', closeAllMenus);

    return () => {
      document.removeEventListener('click', closeAllMenus);
      window.removeEventListener('resize', closeAllMenus);
    };
  }, []);

  useEffect(() => {
    console.log(open);
  }, [open]);

  function openMenu(type: OpenEnum) {
    const data = {
      product: false,
      company: false,
      connect: false,
      mobile: false,
    };
    data[type] = true;
    setOpen(data);
  }

  function closeAllMenus() {
    setOpen({ product: false, company: false, connect: false, mobile: false });
  }

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <img src={imgLogo} className={styles.logo} />
        <nav className='tablet desktop'>
          <ul className={styles.navlist}>
            <li>
              <a
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  openMenu(OpenEnum.Product);
                }}
                ref={refProduct}
                href='#'
                className={styles.navlink}
              >
                Product
              </a>
            </li>
            <li>
              <a
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  openMenu(OpenEnum.Company);
                }}
                ref={refCompany}
                href='#'
                className={styles.navlink}
              >
                Company
              </a>
            </li>
            <li>
              <a
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  openMenu(OpenEnum.Connect);
                }}
                ref={refConnect}
                href='#'
                className={styles.navlink}
              >
                Connect
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.loginBtns + ' tablet desktop'}>
          <button className={styles.loginBtn}>Login</button>
          <button className={styles.registerBtn + ' btn-white'}>Sign Up</button>
        </div>

        <img
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            openMenu(OpenEnum.Mobile);
          }}
          src={imgMenu}
          className={styles.imgMenu + ' mobile'}
        />
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

      <nav
        style={{
          position: 'absolute',
          left: `${refProduct.current?.getBoundingClientRect().left}px`,
        }}
        className={
          styles.navMenu +
          ' ' +
          styles.navMenuProduct +
          ' ' +
          (open.product && styles.open)
        }
      >
        <ul className={styles.navMenuList}>
          <li>
            <a className={styles.navMenuLink} href='#'>
              Overview
            </a>
          </li>
          <li>
            <a className={styles.navMenuLink} href='#'>
              Pricing
            </a>
          </li>
          <li>
            <a className={styles.navMenuLink} href='#'>
              Marketplace
            </a>
          </li>
          <li>
            <a className={styles.navMenuLink} href='#'>
              Features
            </a>
          </li>
          <li>
            <a className={styles.navMenuLink} href='#'>
              Integrations
            </a>
          </li>
        </ul>
      </nav>

      <nav
        style={{
          position: 'absolute',
          left: `${refCompany.current?.getBoundingClientRect().left}px`,
        }}
        className={
          styles.navMenu +
          ' ' +
          styles.navMenuCompany +
          ' ' +
          (open.company && styles.open)
        }
      >
        <ul className={styles.navMenuList}>
          <li>
            <a className={styles.navMenuLink} href='#'>
              About
            </a>
          </li>
          <li>
            <a className={styles.navMenuLink} href='#'>
              Team
            </a>
          </li>
          <li>
            <a className={styles.navMenuLink} href='#'>
              Blog
            </a>
          </li>
          <li>
            <a className={styles.navMenuLink} href='#'>
              Careers
            </a>
          </li>
        </ul>
      </nav>

      <nav
        style={{
          position: 'absolute',
          left: `${refConnect.current?.getBoundingClientRect().left}px`,
        }}
        className={
          styles.navMenu +
          ' ' +
          styles.navMenuConnect +
          ' ' +
          (open.connect && styles.open)
        }
      >
        <ul className={styles.navMenuList}>
          <li>
            <a className={styles.navMenuLink} href='#'>
              Contact
            </a>
          </li>
          <li>
            <a className={styles.navMenuLink} href='#'>
              Newsletter
            </a>
          </li>
          <li>
            <a className={styles.navMenuLink} href='#'>
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
