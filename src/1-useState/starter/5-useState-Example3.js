import React, { useState } from 'react'

const Index5 = () => {


const [list, setList] = useState([]);
const [message, setMessage] = useState({
    text:"",
    id:""
});
const [editingItem, setEditingItem] = useState({
    id:"",
    isEditing: false
});
const changeMessage = (e) =>{
 setMessage({
    ...message,
    text:e.target.value,
 })

}

const addData = (e) =>{
e.preventDefault();
let newTodo = {
    text: message.text,
    id: new Date().getTime().toString(),
}
{
    // eslint-disable-next-line
    setList([...list, newTodo])
    setMessage({
        text:"",
        id:""
    })
}
}

const deleteItem = (id) => {
let newTodos = list.filter((eachItem) =>{
    return eachItem.id !== id;
})
setList(newTodos);
}

const editItem = (id) =>{
setEditingItem({
    ...editingItem,
    id: id,
    isEditing: true,
});

let editableItem = list.find((eachItem)=> eachItem.id === id);
setMessage({
    ...message,
    text: editableItem.text,
    id: editableItem.id
}
)

}

const handleEdit = (e) =>{
e.preventDefault();

let newTodos = list.map((eachItem)=>{
    if (eachItem.id === editingItem.id){
      return{
        text: message.text,
        id: editingItem.id,
      }
    }else{
       return eachItem; 
    }
})
setList(newTodos);
setEditingItem({
    isEditing: false,
})
setMessage({
    id:"",
    text: "",
})
}

return (
<div>
<h2 style={{color:"crimson", marginBottom:"12px", marginTop:"0px"}}>To-Do List</h2>
<form >
<input type='text' name="message" id="message" 
placeholder='enter some text' value={message.text}
onChange={changeMessage}/>
<span>    </span>
{
    editingItem.isEditing ? <button onClick={handleEdit} type='submit'> Edit </button> 
    : <button onClick={addData} type='submit'> Add </button>  
}
   
</form> 
<hr/>
{
    list.length === 0 && <h4>There are no items in the 
        list</h4>
}
<ul>
{
    list.map((eachItem) => {
        const {text, id} = eachItem;
        return <li key={id}>
          <span> {text} </span>
          <button onClick={() => editItem(id)}> Edit </button> <span>    </span> 
          <button onClick={() => deleteItem(id)}> Delete </button>  
        </li>;
    })
}    
</ul>   
</div>
  )

};
export default Index5;
