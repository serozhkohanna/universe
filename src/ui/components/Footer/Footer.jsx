import React, {Component} from 'react';
import styles from './Footer.module.css';

class Footer extends Component{
  render(){
    return <section className={styles.footer}>
    <div className={styles.content}>
      <ul className={styles.footerMenu}>
        <li className={styles.footerMenuItem}>my project</li>
        <li className={styles.footerMenuItem}>help</li>
      </ul>
    </div>
    </section>
  }
}

export default Footer
