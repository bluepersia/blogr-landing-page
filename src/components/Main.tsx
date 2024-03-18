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
        <h2 className={styles.title}>Designed for the future</h2>
        <div className={styles.section1content}>
          <img
            src={imgIllustrationMobile}
            className={styles.section1imgMobile + ' mobile tablet'}
          />
          <div className={styles.section1text}>
            <h3 className={styles.subtitle}>
              Introducing an extensible editor
            </h3>
            <p className={styles.body + ' ' + styles.gray}>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
            <h3 className={styles.subtitle}>Robust content management</h3>
            <p className={styles.body + ' ' + styles.gray}>
              {' '}
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>

          <div className={styles.section1imgDesktopWrapper + ' desktop'}>
            <img
              src={imgIllustrationDesktop}
              className={styles.section1imgDesktop}
            />
          </div>
        </div>
      </section>

      <section className={styles.section2}>
        <div className={styles.imgPhonesWrapper}>
          <img src={imgPhones} className={styles.section2img} />
        </div>
        <div className={styles.section2content}>
          <h3 className={styles.title + ' ' + styles.white}>
            State of the Art Infrastructure
          </h3>
          <p className={styles.body}>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </section>

      <section className={styles.section3}>
        <img
          src={imgLaptopMobile}
          className={styles.section3imgMobile + ' mobile tablet'}
        />
        <div className={styles.section3imgWrapper + ' desktop'}>
          <img src={imgLaptopDesktop} className={styles.section3imgDesktop} />
        </div>

        <div className={styles.section3text}>
          <h3 className={styles.subtitle}>Free, open, simple</h3>
          <p className={styles.body}>
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
          <h3 className={styles.subtitle}>Powerful tooling</h3>
          <p className={styles.body}>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </section>
    </main>
  );
}
