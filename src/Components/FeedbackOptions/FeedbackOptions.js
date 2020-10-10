import React from 'react';
import PropTypes from 'prop-types';
import styles from './buttons.module.css'

const FeedbackOptions = ({ /* options, */ onLeaveFeedback }) => {
  return (
    <>
      <button className={styles.buttonGood} type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button className={styles.buttonNeutral} type="button" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button className={styles.buttonBad} type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
