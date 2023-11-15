import React,{useEffect, useState} from "react";

const Starter = () => {

const [ count, setCount] = useState(0);
useEffect(() => {
  console.log("Hello, I am coming from useEffect", count)
},[count]);




return <div>
    <h1>Starter useEffect - Hello</h1>
    <button onClick={()=>setCount(count-1)}> - </button>
    <h2>{count}</h2>
    <button onClick={()=>setCount(count+1)}> + </button>
    </div>;
};

export default Starter;
