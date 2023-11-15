import React, {useState, useEffect} from 'react'

const URL = "https://jsonplaceholder.typicode.com/users";


const Starter3 = () => {

const [usersData, setUsersData] = useState([]);
const [loading, setLoading] = useState(true);
const [isError, setIsError] = useState({status:false, msg:""});
  
const fetchUsersData = async (apiUrl) =>{
try {
const response = await fetch(apiUrl);
const data = await response.json();
setUsersData(data);
setLoading(false);
setIsError({status:false, msg:""})
 if (response.status === 404){
     //return <h3>404 Error! Data Not Found </h3>
    throw new Error("Data not found")
 }
} catch (error) {
setLoading(false);
setIsError({status:true,
     msg:error.message || "Something went wrong! Please try again"})
}
};

useEffect(() => {
    fetchUsersData(URL);
}, []);

if (loading){
return( <div>
<h3>Loading...</h3>
</div>
)}

if(isError.status){
return( <div>
<h2 style={{color:"Red"}}><strong>{isError.msg}</strong></h2>
</div>
)}


return (
<div>
<ol>
{
usersData.map((eachUser)=>{
const {id, name, email, phone} = eachUser
return <li key={id}>Name: {name}<br/> Mail: {email}<br/>
 PhoneNo:{phone}<br/><br/>
</li>;
})
}
</ol>  
</div>
  )
}

export default Starter3
