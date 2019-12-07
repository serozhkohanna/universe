import React, {Component} from 'react';
import styles from './Confirm.module.css';
import close from './src/close.svg';
import graphic from './src/graphic.svg';

class Confirm extends Component{
  handleClick = (data) => () => {
    this.props.modalWinow(data);
  }
  render(){
    return <section className={styles.confirm} onClick = {this.handleClick}>
      <div className={styles.content}>
        <header className={styles.header}>
          <p>Are you sure?</p>
          <button onClick={this.handleClick(false)}><img className={styles.closeBtn} src={close} /></button>
        </header>
        <div className={styles.body}>
          <div className={styles.messages}>
            <p className={styles.mainMessage}>Are you sure want to leave? </p>
            <p className={styles.commonMessage}>Unsaved chages may be lost</p>
          </div>
          <img className={styles.graphic} src={graphic} />
        </div>
        <div className={styles.buttons}>
          <button onClick={this.handleClick(true)} className={styles.leaveBtn}>Leave</button>
          <button onClick={this.handleClick(false)} className={styles.stayBtn} >Stay</button>
        </div>
      </div>
    </section>
  }
}
export default Confirm;
