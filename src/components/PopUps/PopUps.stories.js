import React, { useState } from "react";
import PopUps from "./PopUps";
import Button from "../Button/Button";

export default {
  title: "Reusable/PopUp",
  component: PopUps,
};

//export const PopUps_1 = () => <PopUp />;
// const App = () => {
//   return (
//     <div>
//       <PopUp
//         toggle={(show) => <Button onClick={show}>Click Me...</Button>}
//         content={(hide) => (
//           <div>
//             <p>Close mee</p>
//             <Button onClick={hide}>Hide me..</Button>
//           </div>
//         )}
//       />
//     </div>
//   );
// };
// export const Pop = () => <App />;
const Wrapper = () => {
  const [seen, setSeen] = useState(false);
  return (
    <>
      <Button onClick={() => setSeen(true)}>OPEN ME ...</Button>
      <PopUps open={seen} close={() => setSeen(false)}>
        <h1>HELOO</h1>
        <p>CLOSE ME ....</p>
      </PopUps>
    </>
  );
};

export const PopUp_1 = () => <Wrapper />;
