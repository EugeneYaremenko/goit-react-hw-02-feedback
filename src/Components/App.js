import React, { Component } from 'react';
import Wrapper from './Wrapper/Wrapper';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = field => {
    const fieldValue = field.target.textContent.toLowerCase();
    const updateStateField = { [fieldValue]: this.state[fieldValue] + 1 };

    this.setState(updateStateField);
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((a, b) => a + b, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const positivePercentage = Math.round(
      (good / (good + neutral + bad)) * 100,
    );

    return positivePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            /* options={} */ onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>

        {this.countTotalFeedback() === 0 && (
          <Notification message="No feedback given" />
        )}
      </Wrapper>
    );
  }
}
