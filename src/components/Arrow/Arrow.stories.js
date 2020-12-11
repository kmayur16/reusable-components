import Arrow from "./Arrow";
import React from "react";

export default {
  title: "Reusable/Arrow",
  component: Arrow,
};

export const Top = () => <Arrow dir="top" />;
export const Down = () => <Arrow dir="down" />;
export const Left = () => <Arrow dir="left" />;
export const Right = () => <Arrow dir="right" />;
