import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './PlannerHeader.module.css';
import DotButtons from '../../components/DotButtons/DotButtons';
import search from './src/search.svg';
import { HOME } from '../../../constants/routes.js';

export default function PlannerHeader(props) {
  const [isInputFocus, focusInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleFocus = event => {
    focusInput(true)
  }

  const handleBlur = (event) => {
    focusInput(false);
    setSearchValue(event.target.value)
  }

  return <header className={styles.header}>
    <div className={styles.content}>
      <div className={styles.logo}>
        <Link to={HOME} className={styles.title}>universe</Link>
      </div>
      <div className={styles.searchHeader}>
        <div className={styles.search}>
          <img src={search} />
          <input placeholder='Search...' onBlur={handleBlur} onFocus={handleFocus} className={isInputFocus ? styles.searchActive : styles.searchText} />
        </div>
        <p className={styles.plannerName}>Planner name</p>
        <DotButtons />
      </div>
    </div>
  </header>
}
