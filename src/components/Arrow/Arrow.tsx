// import React from "react";

// import Styles from "./Arrow.module.css";

// enum Direction {
//   Top = "top",
//   Down = "down",
//   Left = "left",
//   Right = "right",
// }
// const Arrow = ({ dir = Direction.Top }) => {
//   let cs = null;
//   if (dir === Direction.Right) {
//     cs = Styles.right;
//   } else if (dir === Direction.Down) {
//     cs = Styles.down;
//   } else if (dir === Direction.Top) {
//     cs = Styles.top;
//   } else {
//     cs = Styles.left;
//   }

//   return <div className={`${Styles.Arrow} ${cs}`} />;
// };

// export default Arrow;

import React from "react";
import styles from "./Arrow.module.css";

export enum Direction {
  Right = 0,
  Bottom,
  Left,
  Top,
}
// export enum Direction {
//   Top = -45,
//   Right = 45,
//   Bottom = 135,
//   Left = -135,
// }

export interface ArrowProps {
  direction: Direction;
}
const Arrow = ({ direction = Direction.Right }: ArrowProps) => {
  const degrees = [45, 135, 225, 315];
  const degree = degrees[direction]; //direction * 90 + 45;
  const rotationNeeded = `rotate(${degree}deg`;
  return (
    <div className={styles.Arrow} style={{ transform: rotationNeeded }}></div>
  );
};

export default Arrow;
