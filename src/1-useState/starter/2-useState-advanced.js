import React, {useState} from "react";


const Index1 = () => {

 const intialArray = [
    {id: 123, firstName:"Vikas", lastName:"Pokala", age: 24,},
    {id: 456,firstName:"Indu", lastName:"Ande", age: 30,},
    {id: 789,firstName:"Revathi", lastName:"Thipirishetty", age: 50,},
    {id: 1011,firstName:"Srinivas", lastName:"Pokala", age: 56,},
 ]
 
 
 const [data, setData] = useState(intialArray);

const handleDelete = (comingId) => {
const filterData = data.filter((eachItem) => {
    return eachItem.id !== comingId;
});
setData(filterData);
}

    return (
    <div>
    {/* <h1>{data[0].firstName + " " + data[0].lastName + ", " + data[0].age}</h1>
    <h1>{data[1].firstName + " " + data[1].lastName + ", " + data[1].age}</h1>
    <h1>{data[2].firstName + " " + data[2].lastName + ", " + data[2].age}</h1> */}
    <ol type="A">
    {
        data.map((eachItem) => {
            const {firstName, lastName,age, id} = eachItem;
            return <li key={id}><strong>Details: </strong>{firstName + " " + lastName + ", " + 
            age}
             <br />
           <button onClick={() => handleDelete(id)}>Delete Me </button>
             </li>
        })
    }
   </ol>
   </div>
    );
    }

export default Index1;
