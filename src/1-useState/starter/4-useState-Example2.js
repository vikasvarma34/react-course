import React,{useState} from "react";

const Index4 = () => {

    const[firstName, setFirstName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

// const changeFirstName = (e) => {
//    setFirstName(e.target.value);
// }
// const changeEmail = (e) => {
//    setEmail(e.target.value);
// }
// const changePassword = (e) => {
//    setPassword(e.target.value);
// }

const handleInputChange = (e, name) =>{
    if (name === "firstName"){
    setFirstName(e.target.value)}
    else if(name === "email"){
    setEmail(e.target.value)}
}

const submitData = (e) =>{
    e.preventDefault();
    let userObj = {
        firstName:firstName,
        email: email,
        password: password,
    };
    console.log(userObj);
}

return (
<div>
<form onSubmit={submitData}>
    <input type="text" name="firstname" id="firstname"
    placeholder="enter your name" value={firstName} 
    onChange={(e) => handleInputChange(e, "firstName")}></input><br/>

    <input type="email" name="email" id="email"
    placeholder="enter your email" value={email}
    onChange={(e) => handleInputChange(e, "email")}></input><br/>

    <input type="password" name="password" id="password"
    placeholder="enter your password" value={password}
    onChange={(e) => setPassword(e.target.value)}></input><br/>

    <button type="submit" > Submit </button>
</form>

</div>
);
}

export default Index4;