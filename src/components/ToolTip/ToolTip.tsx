import React from "react";
import styles from "./ToolTip.module.css";
import Button from "../Button/Button";

const ToolTip = () => {
  return (
    <div className={styles.ToolTip}>
      <Button className={styles.tick}>ToolTip</Button>
      <span className={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quod
        doloribus sed repellat soluta saepe alias sint commodi ut accusantium
        eligendi, facere, velit provident praesentium. Id ipsa et ut accusamus.
      </span>
    </div>
  );
};

export default ToolTip;
