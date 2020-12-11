import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Arrow from "../Arrow/Arrow";
import styles from "./Dropdown.module.css";

const Main = styled("div")`
  font-family: sans-serif;
  background: #f0f0f0;
  height: 100vh;
`;

const Container = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const Header = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 1em 0.4em 1em;
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListCon = styled("div")``;

const List = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

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
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    if (open === false) {
      setDirection("right");
    } else {
      setDirection("down");
    }
  }, [open]);

  const toggling = () => setOpen(!open);

  const onOptionClicked = (value) => () => {
    setSelected(value);
    setOpen(false);
  };

  return (
    <Main>
      <Container>
        <Header onClick={toggling}>
          {selected || "Month"}
          <span>
            <Arrow open={open} dir={direction} />
          </span>
        </Header>
        {open && (
          <ListCon>
            <List>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </List>
          </ListCon>
        )}
      </Container>
    </Main>
  );
}
