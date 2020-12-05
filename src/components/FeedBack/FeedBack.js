import style from './FeedBack.module.css';
import React, { Component } from 'react';
import Statistics from './Statistics/Statistics.js';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.js';
import Section from './Section/Section.js';
import Notification from './Notification/Notification.js';
class FeedBack extends Component {
  static defaultProps = {};
  static propTypes = {};
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(({ good, neutral, bad }) => {
      const total = Number(good + neutral + bad);
      if (neutral === 0 && bad === 0) {
        if (good !== 0) {
          return {
            percentage: 100,
            total: total,
          };
        }
      }
      if (neutral !== 0 && bad !== 0) {
        return {
          percentage: Math.ceil((100 / (good + neutral + bad)) * good),
          total: total,
        };
      } else if (neutral !== 0 && bad === 0) {
        return {
          percentage: Math.ceil((100 / (good + neutral)) * good),
          total: total,
        };
      } else if (bad !== 0 && neutral === 0) {
        return {
          percentage: Math.ceil((100 / (good + bad)) * good),
          total: total,
        };
      }
    });
  };
  countTotalFeedback = ({ target }) => {
    const { good, neutral, bad } = this.state;
    const { name } = target;
    if (name === 'good') {
      this.setState({
        good: Number(good + 1),
      });
    } else if (name === 'neutral') {
      this.setState({
        neutral: Number(neutral + 1),
      });
    } else if (name === 'bad') {
      this.setState({
        bad: Number(bad + 1),
      });
    }
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
          {Number(total) > 0 ? (
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
