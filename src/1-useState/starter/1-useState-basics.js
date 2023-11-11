import { useState } from "react";

const Index = () => {

const [count, setCount] = useState(10);

const incrementFunction = () =>{
setCount((count) => count + 1);
setCount((count) => count + 1);
}

const decrementFunction = () =>{

  setCount((count) => count - 1);
  setCount((count) => count - 1);
}

return (
  <div>
   <button onClick={decrementFunction}>-</button>
   <span style={{color: "royalblue"}}> Count: {count} </span>
   <button  onClick={incrementFunction}>+</button>

  </div>
);
};

export default Index;
