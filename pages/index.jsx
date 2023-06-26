import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';
import DownloadIcon from '../components/icons/DownloadIcon';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>DIGITAL</h1>
          <h1>CRAFTSMAN</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Arun Kumar</h1>
            <h6 className={styles.bio}>Software Engineer</h6>
            <div className={styles.actionContainer}>
              <a href="/Arun_Kumar.pdf" download>
                <button className={styles.button}>
                  Resume
                  <DownloadIcon className={styles.icon} />
                </button>
              </a>
              <Link href="/contact">
                <button className={styles.outlined}>Contact Me</button>
              </Link>
            </div>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
