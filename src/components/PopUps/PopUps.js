import React, { useState, useEffect, useRef } from "react";
import styles from "./PopUps.module.css";
import Button from "../Button/Button";

// const PopUps = ({ toggle, content }) => {
//   const [seen, setSeen] = useState(false);

//   function hide() {
//     setSeen(false);
//   }

//   function show() {
//     setSeen(true);
//   }
//   return (
//     <div className={styles.PopUps}>
//       {toggle(show)}
//       {seen && (
//         <>
//           <div className={styles.onClose} onClick={() => setSeen(false)} />
//           <div className={styles.Pop}></div>

//           <div className={styles.div}> {content(hide)}</div>
//         </>
//       )}
//     </div>
//   );
// };
// export default PopUps;
const PopUps = ({ children, open, close }) => {
  return (
    <>
      {open && (
        <>
          <div className={styles.PopUp} onClick={close} />
          <div className={styles.PopUpWrapper}>
            <div className={styles.PopUpContent}>{children}</div>
            <Button onClick={close}>Close</Button>
          </div>
        </>
      )}
    </>
  );
};

export default PopUps;
