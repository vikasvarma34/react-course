import React,{useEffect, useState} from "react";

const Starter2 = () => {

const [ count, setCount] = useState(0);
const [pageWidth, setPageWidth] = useState(window.innerWidth);
//const [ toggle, setToggle] = useState(true);

useEffect(() => {
const resizeHandler = ()=>{
    setPageWidth(window.innerWidth)
 }
window.addEventListener('resize',resizeHandler)

console.log("Hello, I am coming from useEffect");

return () => {
console.log("I am Removing")
window.removeEventListener("resize", resizeHandler);
}


});




return <div>
    <h1>Starter useEffect - Hello</h1>
    <button onClick={()=>setCount(count-1)}> - </button>
    <h2>{count}</h2>
    <button onClick={()=>{setCount(count+1)}}> + </button>
    <hr />
    <h2>{pageWidth}</h2>
    {/* <h2 style={{cursor:"grab"}} onClick={()=>setToggle(!toggle)}> {toggle ? "open" : "close"} </h2> */}
    
    </div>;
};

export default Starter2;
