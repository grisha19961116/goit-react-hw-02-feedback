import style from './Statistics.module.css';
export default function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <ul>
      <li>
        <span>Good : </span>
        <span className={style.span__statistic}>{good}</span>
      </li>
      <li>
        <span>Neutral : </span>
        <span className={style.span__statistic}>{neutral}</span>
      </li>
      <li>
        <span>Bad : </span>
        <span className={style.span__statistic}>{bad}</span>
      </li>
      <li>
        <span>Total : </span>
        <span className={style.span__statistic}>{total}</span>
      </li>
      <li>
        <span>Positive statistic : </span>
        <span className={style.span__statistic}>{percentage}%</span>
      </li>
    </ul>
  );
}
