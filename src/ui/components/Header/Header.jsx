import React, {Component} from 'react';
import styles from './Header.module.css';

import { Link } from 'react-router-dom';
import { HOME, HOW_IT_WORKS, FILL_DATA } from '../../../constants/routes.js';

class Header extends Component{
  render(){
    return <section className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <p className={styles.time}>time</p>
          <h1 className={styles.universe}>universe</h1>
        </div>
        <ul className={styles.menu}>
          <Link to={HOME} className={styles.menuItem}>home</Link>
          <Link to={HOW_IT_WORKS} className={styles.menuItem}>how it works</Link>
        </ul>
        <Link to={FILL_DATA} className={styles.startedBtn}>get started</Link>
      </div>
    </section>
  }
}

export default Header;
