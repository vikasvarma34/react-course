import React, { useState } from 'react'

const Index6 = () => {

const [message, setMessage] = useState({
    name:"",
    id:"",
});

const [isEditable, setIsEditable] = useState({
    id:"",
    ability:false,
});

const [array, setArray] = useState([]);

const messageFunction =(e) =>{
setMessage({...message,
    name: e.target.value,
})
}

const deleteItemFunction = (id) => {
const modfiedArray = array.filter((eachObj) =>eachObj.id !== id)
setArray(modfiedArray);
}

const handlingArray = (e) =>{
e.preventDefault();
let newObj = {
    name:message.name,
    id: new Date().getTime().toString(),
}
{
    setArray([...array,newObj]);
    setMessage({
        name:"",
        id:""
    })
}
}



const editItemFunction = (id) =>{
setIsEditable({...isEditable,
    id : id,
    ability: true})
let editableItem = array.find((eachObj) => eachObj.id === id);
setMessage({
    ...message,
    name: editableItem.name,
    id: editableItem.id,
})
}

const editingArray = (e) =>{
    e.preventDefault();
    let newEditedArray = array.map((eachObj) => {
        if(eachObj.id === message.id){
            return{
                id: message.id,
                name: message.name,
            }
        }
        else{
            return eachObj;
        }})
    setArray(newEditedArray);
    setIsEditable({
        id:"",
        ability:false,
    })
    setMessage({
        name:"",
        id:"",
    })
}

return (
<div>
<h1>To-Do List</h1>
<form>
<input type="text" name="messagebox" 
placeholder='Type your task' value={message.name}
onChange={messageFunction}></input> 
<span>   </span>
{isEditable.ability ? <button type='submit' onClick={editingArray}> Edit </button> : 
<button type='submit' onClick={handlingArray}> Add </button>}

</form>
<hr />
<ol>
{
array.map((eachObj) => {
   const {name, id} = eachObj;
   return(
    <li key={id}>
        <span>{name}   </span>
        <button onClick={() => editItemFunction(id)}> Edit </button><span>  </span>
        <button onClick={() => deleteItemFunction(id)}> Delete </button>

   </li>
   )
})
}
</ol>  
</div>
)
}

export default Index6
