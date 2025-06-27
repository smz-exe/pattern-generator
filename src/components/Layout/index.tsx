import React from 'react';
import styles from './styles.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.gridOverlay} />
      {children}
      <div className={styles.ambientLight} />
    </div>
  );
};
