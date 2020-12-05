import style from './FeedbackOptions.module.css';
import React, { Component } from 'react';
class FeedbackOptions extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className={style.wrapper__btn}>
        <button
          className={style.btn}
          type="button"
          name="good"
          onClick={onClick}
        >
          Good
        </button>
        <button
          className={style.btn}
          type="button"
          name="neutral"
          onClick={onClick}
        >
          Neutral
        </button>
        <button
          className={style.btn}
          type="button"
          name="bad"
          onClick={onClick}
        >
          Bad
        </button>
      </div>
    );
  }
}
export default FeedbackOptions;
