import { NavLink } from 'react-router-dom';

import styles from './Nav.module.css';

const Nav = () => (
  <nav className={styles.container}>
    <NavLink
      className={styles.link}
      activeClassName={styles['link--active']}
      exact
      to="/"
    >
      Home
    </NavLink>
    <NavLink
      className={styles.link}
      activeClassName={styles['link--active']}
      exact
      to="/meetings"
    >
      Meetings
    </NavLink>
    <NavLink
      className={styles.link}
      activeClassName={styles['link--active']}
      exact
      to="/create-meeting"
    >
      Create Meeting
    </NavLink>
  </nav>
);

export { Nav };
