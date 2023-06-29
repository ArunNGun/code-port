import Link from 'next/link';
import { useRouter } from 'next/router';
import FilesIcon from './icons/FilesIcon';
import GithubIcon from './icons/GithubIcon';
import CodeIcon from './icons/CodeIcon';
import PencilIcon from './icons/PencilIcon';
import MailIcon from './icons/MailIcon';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';
import styles from '../styles/Sidebar.module.css';
import Tooltip from './Tooltip';

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: '/',
  },
  {
    Icon: MailIcon,
    path: '/contact',
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    desc: 'About',
    path: '/about',
  },
  {
    Icon: SettingsIcon,
    desc: 'Themes',
    path: '/settings',
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${router.pathname === path && styles.active
                }`}
            >
              <Icon
                fill={
                  router.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, desc, path }) => (
          <div key={path} className={desc === 'Themes' ? styles.themeIconContainer : styles.iconContainer}>

            {desc === 'Themes' ?
              <Tooltip message="Themes" showTooltip>
                <Link href={path} key={path}>
                  <Icon
                    fill={
                      router.pathname === path
                        ? 'rgb(225, 228, 232)'
                        : 'rgb(106, 115, 125)'
                    }
                    className={styles.icon}
                  />
                </Link>
              </Tooltip>
              :
              <Link href={path} key={path}>
                <Icon
                  fill={
                    router.pathname === path
                      ? 'rgb(225, 228, 232)'
                      : 'rgb(106, 115, 125)'
                  }
                  className={styles.icon}
                />
              </Link>
            }
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
