// import PropTypes from "prop-types";
import React from "react";
import { idText } from "typescript";
// import styled from "styled-components";

import Styles from "./Arrow.module.css";
// import styles from "./Arrow.module.css";

// const Main = styled("div")``;

// const Arrrow = styled("div")`
//   transform: ${(props) => (props.up ? "rotate(135deg)" : "rotate(-45deg)")};
//   padding: 2px;
//   border-top: 1px solid red;
//   border-right: 1px solid red;
//   width: 2px;
//   height: 2px;
// `;
// const ArrowUp = styled("div")`
//   padding: 2px;
//   border-top: 1px solid red;
//   border-right: 1px solid red;
//   width: 2px;
//   height: 2px;
//   transform: rotate(-45deg);
// `;
// const ArrowRight = styled("div")`
//   padding: 2px;
//   border-top: 1px solid red;
//   border-right: 1px solid red;
//   width: 2px;
//   height: 2px;
//   transform: rotate(45deg);
// `;
// const ArrowLeft = styled("div")`
//   padding: 2px;
//   border-top: 1px solid red;
//   border-right: 1px solid red;
//   width: 2px;
//   height: 2px;
//   transform: rotate(-135deg);
// `;
enum Direction {
  Top = "top",
  Down = "down",
  Left = "left",
  Right = "right",
}
const Arrow = ({ dir = Direction.Top }) => {
  let cs = null;
  if (dir === Direction.Right) {
    cs = Styles.right;
  } else if (dir === Direction.Down) {
    cs = Styles.down;
  } else if (dir === Direction.Top) {
    cs = Styles.top;
  } else {
    cs = Styles.left;
  }

  return <div className={`${Styles.Arrow} ${cs}`} />;
};

// Arrow.propTypes = {};

export default Arrow;
