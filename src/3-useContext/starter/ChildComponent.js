import SubChildComponent from "./SubChildComponent";
import React, {useContext, useEffect} from "react";
import {UserContext} from "../../context/userContext"


const ChildComponent = () => {

    const data = useContext(UserContext);

    console.log();
    return (
      <div>
        <h2>Child Component</h2>
        <div> { data.firstName + " " + data.lastName} </div>
        <SubChildComponent/>
      </div>
    )
}

export default ChildComponent;