import style from './Statistics.module.css';
import PropTypes from 'prop-types';
export default function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <ul>
      <li>
        <span>Good : </span>
        <span>{good}</span>
      </li>
      <li>
        <span>Neutral : </span>
        <span>{neutral}</span>
      </li>
      <li>
        <span>Bad : </span>
        <span>{bad}</span>
      </li>
      <li>
        <span>Total : </span>
        <span>{total}</span>
      </li>
      <li>
        <span>Positive : </span>
        <span>{percentage}%</span>
      </li>
    </ul>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
