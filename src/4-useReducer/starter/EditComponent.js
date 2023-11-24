import React, {useState} from 'react'

const EditComponent = ({id, name1, userName1, updateData}) => {

  const [name,setName] = useState(name1 || '');
  const [userName, setUserName] = useState(userName1 || '');
  console.log(name1, userName1);
  return (
    <div>
      <form onSubmit={()=>updateData(id, name, userName)}>
        Name:<input type='text' name='name' id='name' value={name}
        onChange={(e) => setName(e.target.value)} /><br />
        userName: <input type='text' name='userName' id='userName' value={userName} 
         onChange={(e) => setUserName(e.target.value)}/><br />
        <input type='submit' value="submit" />
        {/* <button onClick={() => updateData(id, name, userName)}> Update Data </button> */}
      </form>
    </div>
  )
}

export default EditComponent
