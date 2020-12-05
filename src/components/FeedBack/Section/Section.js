import style from './Section.module.css';
import React, { Component } from 'react';
class Section extends Component {
  render() {
    const { title, flag, children } = this.props;
    let titleFlag;
    flag ? (titleFlag = <h1>{title}</h1>) : (titleFlag = <h3>{title}</h3>);
    return (
      <>
        {titleFlag} {children}
      </>
    );
  }
}
export default Section;
