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
   <iframe src="//stream.crichd.vip/update/skys2.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>
  </div>
);
};

export default Index;
