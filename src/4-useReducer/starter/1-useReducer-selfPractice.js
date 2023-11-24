import React,{useReducer} from 'react'

const initialState = { count: 0 }

const reducer = (state, action) =>{
switch(action.type){
case 'decrement':
    return {count: state.count - 1};
case 'increment':
    return {count: state.count + 1};
default:
    throw new Error("Data not found");
}

}

const ReduceSelfPractice = () => {

const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <div>
       <button onClick={()=>dispatch({type:"decrement"})}> - </button>
      <h3 style={{padding:"0px", margin:"0px"}}>{state.count}</h3>
      <button onClick={()=>dispatch({type:"increment"})}> + </button>
    </div>
  )
}

export default ReduceSelfPractice
