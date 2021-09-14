import { Nav } from 'components/Nav';

import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <Nav />
    </header>
    <main className={styles.main}>{children}</main>
  </div>
);

export { Layout };
