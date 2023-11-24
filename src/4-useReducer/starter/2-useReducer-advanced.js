import React,{useReducer, useEffect} from 'react';
import EditComponent from './EditComponent';

const reducer = (state, action) => {
if(action.type === "UPDATE-USERS-DATA"){
   return{
    ...state,
    usersData: action.payload,
   }
}
else if (action.type === "ERROR"){
 return{
    ...state,
    isError:{status:action.payload.status, msg:action.payload.msg},
 }
}
else if(action.type === "LOADING"){
return {
    ...state,
    isLoading: action.payload,
}
}
else if(action.type === "DELETE_USER"){
const newData = state.usersData.filter((eachObj)=>  {
    return (eachObj.id !== action.payload)
})
return{
    ...state,
    usersData: newData,
}
}

else if(action.type === "ONCLICK_EDIT"){
return{
    ...state,
    isEditing:{status:true, id:action.payload.id, name: action.payload.name,
    userName: action.payload.userName},
}  
}

else if(action.type === "UPDATE_USER"){
console.log(action.payload);
const newData = state.usersData.map((eachObj) =>{
    if(eachObj.id !== action.payload.id){
        return eachObj;
    }
    else{
        eachObj.name = action.payload.name;
        eachObj.username = action.payload.userName;
        return eachObj;
    }
})

return{
    ...state,
    usersData: newData,
    isEditing:{staus: false, id:'', name:'', userName:''},
}
}
return state;
}

const FinalRec = () => {

const fetchUsersData = async (URL) =>{
    dispatch({type:"LOADING", payload:true});
    dispatch({type:"ERROR", payload: {status:false, msg:""}});
    try {
        const response = await fetch(URL);
        if (response.status === 404) {
            throw new Error("Resource not found (404 error)");
        }
        const data = await response.json();
        console.log(response);
        dispatch ({type:"UPDATE-USERS-DATA", payload:data});  
        dispatch({type:"LOADING", payload:false});
    } catch (error) {
        dispatch({type:"LOADING", payload:false});
        dispatch({type:"ERROR", payload:{status:true,
             msg:error.message}})
    }
}

useEffect(()=>{
    fetchUsersData('https://jsonplaceholder.typicode.com/users');
}, [])

const initialState ={
usersData: [],
isLoading: false,
isError: {status:false, msg:""},
isEditing: {staus: false, id:'', name:'', userName:''}
}   




const [state, dispatch] = useReducer(reducer, initialState)

const handleDelete = (id) => {
dispatch({type:"DELETE_USER", payload:id});
}

const updateData = (id, name, userName) =>{
    dispatch({type:"UPDATE_USER", payload:{id:id, name:name, userName: userName}})
}

if(state.isLoading){
    return (
<div>
    <h2>Loading....</h2>
</div>
    );
}

if(state.isError.status){
    return(
        <div>
        <h2>{state.isError.msg}</h2>
        </div>
    );
}



  return (
    <div>
    <h2>Users Information</h2> 
    {
      (state.isEditing?.status && <EditComponent id={state.isEditing.id} name1={state.isEditing.name}
        userName1={state.isEditing.userName} updateData={updateData}
        />)  
    } 
    <ol>
        {
            state.usersData.map((eachObj) =>{
              return (<li key={eachObj.id}>
                <div>
                Name: {eachObj.name} , 
                username: {eachObj.username}</div>
                <button onClick={() => dispatch({type:"ONCLICK_EDIT",
                 payload:{status: true, id:eachObj.id, 
                 name: eachObj.name,
                 userName: eachObj.username}})}> Edit </button> <span></span>
                <button onClick={() => handleDelete(eachObj.id)}> Delete </button>
                </li>);
            })
        }
    </ol>
    </div>
  )
    
}

export default FinalRec
