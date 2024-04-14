import React from 'react';
import Link from 'next/link';
import styles from './TopMenuBar.module.css';

interface TopMenuBarProps {}

const TopMenuBar: React.FC<TopMenuBarProps> = () => {
  return (
    <div className={styles.topMenuBar}>
      <Link href="page">
        <a className={styles.logo}>HEENSAN</a>
      </Link>
      <div className={styles.menuItems}>
        <Link href="page">
          <a className={styles.menuItem}>회사소개</a>
        </Link>
        <Link href="page">
          <a className={styles.menuItem}>제품사양</a>
        </Link>
        <Link href="page">
          <a className={styles.menuItem}>소식</a>
        </Link>
        <Link href="page">
          <a className={styles.menuItem}>서비스</a>
        </Link>
      </div>
    </div>
  );
};

export default TopMenuBar;