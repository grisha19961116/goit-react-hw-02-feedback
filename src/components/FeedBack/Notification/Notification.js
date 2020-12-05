import style from './Notification.module.css';
import React, { Component } from 'react';
class Notification extends Component {
  render() {
    return <span className={style.span__warning}>Not feedbacks given </span>;
  }
}
export default Notification;
