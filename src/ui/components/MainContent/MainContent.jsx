import React, {Component} from 'react';
import styles from './MainContent.module.css';

import { Link } from 'react-router-dom';
import { HOW_IT_WORKS,FILL_DATA } from '../../../constants/routes.js';

class MainContent extends Component{
  render(){
    return <section className={styles.mainContent}>
      <div className={styles.content}>
        <div className={styles.infoBlock}>
          <div className={styles.text}>
            <p>do whatever <br /> you need <br /> with <span>universe</span></p>
          </div>
          <div className={styles.buttons}>
            <Link to={FILL_DATA} className={styles.getStartedBtn}>Get started</Link>
            <Link to={HOW_IT_WORKS} className={styles.howItWorksBtn}>How it works</Link>
          </div>
        </div>
        <div className={styles.illustration}>
        </div>
      </div>
    </section>
  }
}

export default MainContent;
