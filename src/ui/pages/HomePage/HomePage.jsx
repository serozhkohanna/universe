import React, {Component} from 'react';
import Header from '../../components/Header/Header.jsx';
import MainContent from '../../components/MainContent/MainContent.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import { Switch, Route, withRouter } from 'react-router-dom';
import { HOME, HOW_IT_WORKS } from '../../../constants/routes.js';

import './HomePage.css';

class HomePage extends Component{
  render(){
    return <section className='homePage'>
      <Header />
      <div className='homePageContent'>
        <Switch>
          <Route exact path={HOME} component={MainContent} />
          <Route exact path={HOW_IT_WORKS} component={() => <div>how it works</div>} />
        </Switch>
      </div>
      <Footer />
    </section>
  }
}

export default withRouter(HomePage);
