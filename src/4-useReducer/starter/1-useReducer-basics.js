import React, { useReducer } from "react";

const reducer = (state, action) => {
if(action.type === "DELETE_PERSON"){
    const newPersons = state.data.filter((eachPerson) => {
        return eachPerson.id !== action.payload;
    });
    return{
        ...state,
        data: newPersons,
        length: newPersons.length,
        
    }
}
else if(action.type === "UPDATE_PERSON"){
//   const newPersons = state.data.map((eachPerson) => {
//   }
//  )
}

  else {
    throw new Error("action not found");
}
  
}





const ReducePractice= () =>{

const initialState = {
    data:[
        {firstName: "Vikas", email:"vikasvarma34@gmail.com", id: 34},
        {firstName: "Shiri", email:"shirishan09@gmail.com", id: 45},
        {firstName: "Hare", email:"harekrishna56@gmail.com", id: 56},
    ],
    length: 3,
};

const [state, dispatch] = useReducer(reducer, initialState);

const handleDelete = (id) => {
    dispatch({
        type: "DELETE_PERSON",
        payload: id,

    })
} 

const handleEdit = (id) =>{
    dispatch({
        type: "UPDATE_PERSON",
        payload: id,
    })
    }

return (
    <div>
    <h1>Length: {state.length}</h1>
    {
    state.data.map((eachItem) => {
        const {id, firstName, email} = eachItem;
        return <div key={id}>
       <h3> Name: {firstName}, email: {email}</h3>
       <button onClick={() => handleDelete(id)}> Delete </button> <br />
       <button onClick={() => handleEdit(id)}> Edit </button>
        </div>
    }) 
    }
    </div>
);
}

export default ReducePractice;