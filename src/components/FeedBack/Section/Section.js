import style from './Section.module.css';
export default function Section({ title, flag, children }) {
  const titleFlag = flag ? <h1>{title}</h1> : <h3>{title}</h3>;
  return (
    <>
      {titleFlag} {children}
    </>
  );
}
