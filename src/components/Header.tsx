import styles from './Header.module.css';
import imgLogo from '../images/logo.svg';
import imgMenu from '../images/icon-hamburger.svg';
import imgClose from '../images/icon-close.svg';
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

  function openMenu(type: OpenEnum) {
    setOpen((data) => ({
      mobile: data.mobile,
      product: false,
      company: false,
      connect: false,
      [type]: true,
    }));
  }

  function closeMenu(type: OpenEnum) {
    setOpen((data) => ({ ...data, [type]: false }));
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

        {(!open.mobile && (
          <img
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              openMenu(OpenEnum.Mobile);
            }}
            src={imgMenu}
            className={styles.btnMenu + ' mobile'}
          />
        )) || <img src={imgClose} className={styles.btnClose} />}
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
          (open.product && styles.open) +
          ' tablet desktop'
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
          (open.company && styles.open) +
          ' tablet desktop'
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
          (open.connect && styles.open) +
          ' tablet desktop'
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

      <div
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        className={styles.mobileMenu + ' ' + (open.mobile && styles.open)}
      >
        <nav>
          <ul className={styles.mobileNavList}>
            <li>
              <a
                onClick={() =>
                  open.product
                    ? closeMenu(OpenEnum.Product)
                    : openMenu(OpenEnum.Product)
                }
                className={
                  styles.mobileNavLink + ' ' + (open.product && styles.open)
                }
              >
                Product
              </a>
            </li>
            {open.product && (
              <li>
                <ul className={styles.mobileNavLinkList}>
                  <li>
                    <a className={styles.mobileNavLinkListLink}>Overview</a>
                  </li>
                  <li>
                    <a className={styles.mobileNavLinkListLink}>Pricing</a>
                  </li>
                  <li>
                    <a className={styles.mobileNavLinkListLink}>Marketplace</a>
                  </li>
                  <li>
                    <a className={styles.mobileNavLinkListLink}>Features</a>
                  </li>
                  <li>
                    <a className={styles.mobileNavLinkListLink}>Integrations</a>
                  </li>
                </ul>
              </li>
            )}
            <li>
              <a
                onClick={() =>
                  open.company
                    ? closeMenu(OpenEnum.Company)
                    : openMenu(OpenEnum.Company)
                }
                className={
                  styles.mobileNavLink + ' ' + (open.company && styles.open)
                }
              >
                Company
              </a>
              {open.company && (
                <li>
                  <ul className={styles.mobileNavLinkList}>
                    <li>
                      <a className={styles.mobileNavLinkListLink}>About</a>
                    </li>
                    <li>
                      <a className={styles.mobileNavLinkListLink}>Team</a>
                    </li>
                    <li>
                      <a className={styles.mobileNavLinkListLink}>Blog</a>
                    </li>
                    <li>
                      <a className={styles.mobileNavLinkListLink}>Careers</a>
                    </li>
                  </ul>
                </li>
              )}
            </li>
            <li>
              <a
                onClick={() =>
                  open.connect
                    ? closeMenu(OpenEnum.Connect)
                    : openMenu(OpenEnum.Connect)
                }
                className={
                  styles.mobileNavLink + ' ' + (open.connect && styles.open)
                }
              >
                Connect
              </a>
              {open.connect && (
                <li>
                  <ul className={styles.mobileNavLinkList}>
                    <li>
                      <a className={styles.mobileNavLinkListLink}>Contact</a>
                    </li>
                    <li>
                      <a className={styles.mobileNavLinkListLink}>Newsletter</a>
                    </li>
                    <li>
                      <a className={styles.mobileNavLinkListLink}>LinkedIn</a>
                    </li>
                  </ul>
                </li>
              )}
            </li>
          </ul>
        </nav>
        <div className={styles.mobileLoginBtns}>
          <button className={styles.mobileLoginBtn}>Login</button>
          <button className={styles.mobileRegisterBtn}>Sign Up</button>
        </div>
      </div>
    </header>
  );
}
