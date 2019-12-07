import React from 'react';
import styles from './DotButtons.module.css';

export default function DotButtons() {
  return <ul className={styles.buttons}>
    <li className={styles.btnItem}></li>
    <li className={styles.btnItem}></li>
    <li className={styles.btnItem}></li>
  </ul>
}
