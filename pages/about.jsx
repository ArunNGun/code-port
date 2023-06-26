import styles from '../styles/AboutPage.module.css';
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from 'next/link';

const AboutPage = () => {
  const linesRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.5 } });
    tl.from(linesRef.current.children, {
      height: 0,
      // stagger: 0.2,
      ease: "power2.out",
    }).delay(0.5);
  }, []);

  return (
    <div className={styles.aboutContainer}>
      <div ref={linesRef} className={styles.lineContainer} style={{ overflow: 'hidden' }}>
        <div className={styles.vertical}></div>
        <div className={styles.vertical}></div>
        <div className={styles.vertical}></div>
        <div className={styles.vertical}></div>
        <div className={styles.vertical}></div>
      </div>
      <div className={styles.legendContainer}>
        <div className={styles.background}>
          <h2>DIGITAL</h2>
          <h1>Engineer</h1>
        </div>
        <div className={styles.aboutName}>Hello<span className={styles.fullStop}>.</span><br />I <span className={styles.fullStop}>a</span>m <br />Aru<span className={styles.fullStop}>n</span></div>
        <p className={styles.smallDesc}>A software engineer <br />based in India</p>
      </div>
      <div className={styles.aboutMain}>
        <div className={styles.section1}>
          <div className={styles.image1}>
            <img className={styles.cat} src="/cat.png" alt="" />
          </div>
          <div className={styles.summary1}>
            I'm a software engineer specialised in frontend and backend development for complex scalable web apps.
            If you have a great project that needs some amazing skills.<span className={styles.fullStop}>I'm your guy.</span>
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.background2}>
          </div>
          <div className={styles.background3}>
            <h1>HIRE</h1>
            <h1>ME</h1>
          </div>
          <div className={styles.summary2}>
            I'm always <br /> interested about <br /> cool stuff. Are you <br /> minding a project?<br /><span className={styles.stroke}><Link href='/contact' >Let's talk.</Link></span> </div>
        </div>
        <div className={styles.section3}>
          <a href='https://github.com/ArunNGun' className="socialLinks">GITHUB</a>
          <a href='https://www.linkedin.com/in/akumar97/' className="socialLinks">LINKEDIN</a>
          <a href='https://www.instagram.com/arun_irl/' className="socialLinks">INSTA</a>
          <Link href='/contact' className="socialLinks">MAIL</Link>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
