import React,{useState, useEffect} from 'react'

const Starter5 = () => {

const [number, setNumber] = useState(0);

const changingNumber = (e) => {
e.preventDefault();
setNumber(e.target.value);
}

const submitNumber = (e) => {
e.preventDefault();
return (
    <div>
        The Number is {number};
    </div>
);
}


useEffect(() => {
console.log("The number is " + number);
}, [number])

  return (
    <div>
      <form>
        <input type='text' name='number'
        placeholder='Enter the Number'
        value={number}
        onChange={(e)=> changingNumber(e)}>
        </input><br />
        <button onClick={(e)=>submitNumber(e)}> Submit </button>
        <h2>{number*number}</h2>
      </form>
    </div>
  )
}

export default Starter5
