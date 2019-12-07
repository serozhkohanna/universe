import React, { Component } from 'react';
import styles from './PlannerPage.module.css';
import PlannerHeader from '../../components/PlannerHeader/PlannerHeader';
import PlannerSidebar from '../../components/PlannerSidebar/PlannerSidebar';
import PlannerContent from '../../components/PlannerContent/PlannerContent';

class PlannerPage extends Component{
  render(){
    return <section className={styles.plannerPage}>
        <PlannerHeader />
        <div className={styles.content}>
          <PlannerSidebar />
          <PlannerContent />
        </div>
    </section>
  }
}

export default PlannerPage;
