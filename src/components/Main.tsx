import styles from './Main.module.css';
import imgIllustrationMobile from '../images/illustration-editor-mobile.svg';
import imgIllustrationDesktop from '../images/illustration-editor-desktop.svg';
import imgPhones from '../images/illustration-phones.svg';
import imgLaptopMobile from '../images/illustration-laptop-mobile.svg';
import imgLaptopDesktop from '../images/illustration-laptop-desktop.svg';

export default function Main(): JSX.Element {
  return (
    <main className={styles.main}>
      <section className={styles.section1}>
        <h2 className={styles.title + ' darkblue'}>Designed for the future</h2>
        <div className={styles.section1content}>
          <img
            src={imgIllustrationMobile}
            className={styles.section1imageMobile + ' mobile'}
          />
          <div className={styles.section1text}>
            <h3 className={styles.subtitle + ' darkblue'}>
              Introducing an extensible editor
            </h3>
            <p className={styles.body + ' gray'}>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
            <h3 className={styles.subtitle + ' darkblue'}></h3>
          </div>
          <img
            src={imgIllustrationDesktop}
            className={styles.section1imageDesktop + ' tablet desktop'}
          />
        </div>
      </section>

      <section className={styles.section2}>
        <img src={imgPhones} className={styles.section2img} />
        <div className={styles.section2content}>
          <h3 className={styles.subtitle + ' white'}>
            State of the Art Infrastructure
          </h3>
          <p className={styles.body + ' white'}>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </section>

      <section className={styles.section3}>
        <img src={imgLaptopMobile} className={styles.section3img + ' mobile'} />
        <img
          src={imgLaptopDesktop}
          className={styles.section3img + ' tablet desktop'}
        />
      </section>
    </main>
  );
}
