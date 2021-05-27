import style from './FeedBack.module.css';
import React, { Component } from 'react';
import Statistics from './Statistics/Statistics.js';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.js';
import Section from './Section/Section.js';
import Notification from './Notification/Notification.js';

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.ceil((100 / total) * good) : 0;
  };
  handleFeedback = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: this.state[name] + 1,
    });
  };
  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercent = this.countPercentage();
    return (
      <div className={style.wrapper}>
        <Section title="Please leave feedback" flag={true}>
          <FeedbackOptions listenerOnClick={this.handleFeedback} />
        </Section>
        <Section title="Statistics" flag={false}>
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              percentage={positivePercent}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </div>
    );
  }
}
export default FeedBack;
