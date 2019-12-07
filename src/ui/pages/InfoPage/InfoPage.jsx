import React, { Component } from 'react';
import styles from './InfoPage.module.css';

import { Link } from 'react-router-dom';
import { HOME } from '../../../constants/routes.js';

import Stages from '../../components/Stages/Stages';
import DataFill from '../../components/DataFill/DataFill';
import DotButtons from '../../components/DotButtons/DotButtons';

class InfoPage extends Component{
  render(){
    return <main className={styles.infoPage}>
      <div className={styles.content}>
          <header className={styles.header}>
            <Link to={HOME} className={styles.logo}>universe</Link>
            <DotButtons />
          </header>
          <section className={styles.components}>
            <Stages />
            <DataFill />
          </section>
      </div>
    </main>
  }
}

export default InfoPage;
