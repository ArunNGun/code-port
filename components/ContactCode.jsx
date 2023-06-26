import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'a-k-ivory.vercel.app',
    href: 'https://a-k-ivory.vercel.app/',
  },
  {
    social: 'email',
    link: 'thechaudharyarun@gmail.com',
    href: 'mailto:thechaudharyarun@gmail.com',
  },
  {
    social: 'github',
    link: 'arunNgun',
    href: 'https://github.com/arunNgun',
  },
  {
    social: 'linkedin',
    link: 'akumar97',
    href: 'https://www.linkedin.com/in/akumar97/',
  },
  {
    social: 'instagram',
    link: 'arun_irl',
    href: 'https://www.instagram.com/arun_irl',
  },
  {
    social: 'telegram',
    link: 'iamarunchaudhary',
    href: 'https://t.me/iamarunchaudhary',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
