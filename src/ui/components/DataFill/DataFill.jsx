import React, { Component } from 'react';
import styles from './DataFill.module.css';
import { connect } from 'react-redux';
import { HOME, PLANNER } from '../../../constants/routes.js';
import { withRouter } from 'react-router';

import cameraIcon from './src/camera.png';
import Confirm from '.././Confirm/Confirm';
import { setData } from '../../../actions/setData.js';
import { NAME, LAST_NAME, POSITION, EMAIL, PROJECT_NAME } from '../../../constants/inputValue.js';

class DataFill extends Component {
  state = {
    shareViaLink: true,
    name: '',
    lastName: '',
    position: '',
    email: '',
    projectName: '',
    isModalOpen: false
  }

  handleSwitch = (value) => {
    this.setState({
      shareViaLink: value
    })
  }

  handleNextClick = event => {
    const { name, lastName, position, email, projectName, shareViaLink } = this.state;
    const { setData, history } = this.props;
    const userData = {
      name, lastName, position, email, projectName, shareViaLink
    }

    if (name && email) {
      setData(userData)
      history.push(PLANNER);
    }
  }

  handlePrevClick = () => {
    const { history } = this.props;
    const value = Object.values(this.state).every(item => item);

    return value ? history.push(HOME) : this.setState({
      isModalOpen: true
    });
  }

  handleInputChange = value => event => {
    switch (value) {
      case NAME:
        return this.setState({
          name: event.target.value
        })
      case LAST_NAME:
        return this.setState({
          lastName: event.target.value
        })
      case POSITION:
        return this.setState({
          position: event.target.value
        })
      case EMAIL:
        return this.setState({
          email: event.target.value
        })
      case PROJECT_NAME:
        return this.setState({
          projectName: event.target.value
        })
      // default: 'none'
    }
  }

  openModalWindow = data => {
    const { history } = this.props;

    if (data === false) {
      this.setState({
        isModalOpen: data
      })
    } else {
      history.push(HOME)
    }
  }

  render() {
    const { shareViaLink, isModalOpen } = this.state;

    return <section className={styles.dataFill}>
      <h1 className={styles.title}>we need some data to start your project</h1>
      <div className={styles.personalData}>
        <h1 className={styles.blockTitle}>Personal data</h1>
        <hr className={styles.line} />
        <div className={styles.inputs}>
          <div className={styles.inputBlock}>
            <label className={styles.label}>Name *</label>
            <input onBlur={this.handleInputChange(NAME)} className={styles.input} />
          </div>
          <div className={styles.inputBlock}>
            <label className={styles.label}>LastName</label>
            <input onBlur={this.handleInputChange(LAST_NAME)} className={styles.input} />
          </div>
          <div className={styles.inputBlock}>
            <label className={styles.label}>Position</label>
            <input onBlur={this.handleInputChange(POSITION)} className={styles.input} />
          </div>
          <div className={styles.inputBlockPhoto}>
            <input className={styles.inputPhoto} src={cameraIcon} type='image' alt="photo" />
            <p className={styles.photoLabel}>Upload a photo</p>
          </div>
          <div className={styles.inputBlock}>
            <label className={styles.label}>Email *</label>
            <input onBlur={this.handleInputChange(EMAIL)} className={styles.input} />
          </div>
        </div>
      </div>
      <div className={styles.projectData}>
        <h1 className={styles.blockTitle}>Project data</h1>
        <hr className={styles.line} />
        <div className={styles.inputs}>
          <div className={styles.inputBlock}>
            <label className={styles.label}>Project name</label>
            <input onBlur={this.handleInputChange(PROJECT_NAME)} className={styles.input} />
          </div>
          <div className={styles.switchBlock}>
            <p className={styles.label}>Share via link</p>
            <div className={styles.switchButtons}>
              <button onClick={() => this.handleSwitch(true)} className={shareViaLink ? styles.switchOn : styles.switchBtn}>YES</button>
              <button onClick={() => this.handleSwitch(false)} className={!shareViaLink ? styles.switchOn : styles.switchBtn}>NO</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={this.handlePrevClick} className={styles.BackBtn}>Back</button>
        <button onClick={this.handleNextClick} className={styles.NextBtn}>Next</button>
      </div>
      {isModalOpen && <Confirm modalWinow={this.openModalWindow} />}
    </section>
  }
}

const mapStateToPtops = ({ data }) => {
  return {
    data
  }
}

const mapDispatchToProps = {
  setData
}

export default withRouter(connect(mapStateToPtops, mapDispatchToProps)(DataFill))
