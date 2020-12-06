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
  countPositiveFeedbackPercentage = () => {
    this.setState(({ good, neutral, bad }) => {
      const total = good + neutral + bad;
      const percent = Math.ceil((100 / total) * good);
      if (total > 0) {
        return {
          percentage: percent,
          total: total,
        };
      }
    });
  };
  countTotalFeedback = ({ target }) => {
    const { name } = target;
    this.setState({
      [name]: this.state[name] + 1,
    });
    this.countPositiveFeedbackPercentage();
  };
  render() {
    const { good, neutral, bad, total, percentage } = this.state;
    return (
      <div className={style.wrapper}>
        <Section title="Please leave feedback" flag={true}>
          <FeedbackOptions onClick={this.countTotalFeedback} />
        </Section>
        <Section title="Statistics" flag={false}>
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percentage={percentage}
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
