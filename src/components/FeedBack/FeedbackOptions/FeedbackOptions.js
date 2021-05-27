import style from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
export default function FeedbackOptions({ listenerOnClick }) {
  return (
    <div className={style.wrapper__btn}>
      <button
        className={style.btn}
        type="button"
        name="good"
        onClick={listenerOnClick}
      >
        Good
      </button>
      <button
        className={style.btn}
        type="button"
        name="neutral"
        onClick={listenerOnClick}
      >
        Neutral
      </button>
      <button
        className={style.btn}
        type="button"
        name="bad"
        onClick={listenerOnClick}
      >
        Bad
      </button>
    </div>
  );
}
FeedbackOptions.propTypes = {
  onClick: PropTypes.func.isRequired,
};
