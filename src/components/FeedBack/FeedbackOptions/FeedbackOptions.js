import style from './FeedbackOptions.module.css';
export default function FeedbackOptions({ onClick }) {
  return (
    <div className={style.wrapper__btn}>
      <button className={style.btn} type="button" name="good" onClick={onClick}>
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
      <button className={style.btn} type="button" name="bad" onClick={onClick}>
        Bad
      </button>
    </div>
  );
}
