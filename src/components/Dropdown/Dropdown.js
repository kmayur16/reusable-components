import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Arrow from "../Arrow/Arrow";
import styles from "./Dropdown.module.css";

const options = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

export default function App() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);

  function CloseDropdownList(event) {
    console.log([event.target, ref.current]);
    setOpen(event && event.target === ref.current);
  }
  useEffect(() => {
    document.addEventListener("click", CloseDropdownList);
    return () => document.removeEventListener("click", CloseDropdownList);
  }, []);

  useEffect(() => {
    if (open === false) {
      setDirection(0);
    } else {
      setDirection(1);
    }
  }, [open]);

  const toggling = () => setOpen(!open);

  const onOptionClicked = (value) => () => {
    setSelected(value);
    setOpen(false);
  };

  return (
    <div className={styles.Main}>
      <div className={styles.Container}>
        <div className={styles.Header} onClick={toggling} ref={ref}>
          {selected || "Month"}
          <span>
            <Arrow open={open} direction={direction} />
          </span>
        </div>
        {open && (
          <>
            {/* <div className={styles.onClose} onClick={() => setOpen(false)} /> */}
            <div className={styles.ListCon}>
              <ul className={styles.List}>
                {options.map((option) => (
                  <li
                    className={styles.ListItem}
                    onClick={onOptionClicked(option)}
                    key={Math.random()}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
