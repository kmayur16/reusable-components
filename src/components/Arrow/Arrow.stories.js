// import Arrow from "./Arrow";
// import React from "react";

// export default {
//   title: "Reusable/Arrow",
//   component: Arrow,
// };

// export const Top = () => <Arrow dir="top" />;
// export const Down = () => <Arrow dir="down" />;
// export const Left = () => <Arrow dir="left" />;
// export const Right = () => <Arrow dir="right" />;

import Arrow, { Direction } from "./Arrow";
import React, { useState } from "react";

export default {
  title: "Reusable/Arrow",
  component: Arrow,
};

export const Arrow_1 = () => <Arrow />;

const Wrapper = () => {
  const [direction, setDirection] = useState(Direction.Right);
  return (
    <div>
      <button
        style={{ marginBottom: "15px" }}
        onClick={() => setDirection((prev) => Math.floor(prev + 1) % 4)}
      >
        Rotate
      </button>
      <div style={{ marginBottom: "15px" }}>{direction}</div>
      <Arrow direction={direction} />
    </div>
  );
};

export const WithRotateButton = () => <Wrapper />;

const Wrapper2 = () => {
  const [direction, setDirection] = useState(Direction.Top);
  return (
    <div>
      <button
        style={{ marginBottom: "15px" }}
        onClick={() => setDirection((prev) => prev + 2)}
      >
        Rotate
      </button>
      <div style={{ marginBottom: "15px" }}>{direction}</div>
      <Arrow direction={direction} />
    </div>
  );
};

export const WithRotationTopAndBottom = () => <Wrapper2 />;
