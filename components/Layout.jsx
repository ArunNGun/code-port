import Titlebar from '../components/Titlebar';
import Sidebar from '../components/Sidebar';
import Explorer from '../components/Explorer';
import Bottombar from '../components/Bottombar';
import Tabsbar from './Tabsbar';
import styles from '../styles/Layout.module.css';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Layout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const init = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/init`, {
        method: 'GET'
      });
    }
    init();
  }, []);
  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: '100%' }}>
          <Tabsbar />
          <main className={router.pathname === '/about' || router.pathname === '/projects' ? styles.aboutContent : styles.content}>{children}</main>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;
